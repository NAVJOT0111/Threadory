import { useCallback, useEffect, useId, useRef, useState, type FocusEvent, type KeyboardEvent } from 'react';
import { useLocation } from 'react-router';
import { Menu, Search } from 'lucide-react';
import { IconButton } from '@/components/ui/IconButton';
import { useScrolledPast } from '@/hooks/useScrollPosition';
import { useSiteContent } from '@/hooks/useContent';
import { cn } from '@/lib/cn';
import { useUiStore } from '@/store/uiStore';
import { MobileMenu } from './MobileMenu';
import { NAV_LABEL_CLASS, NavItem } from './NavItem';
import { SearchPanel } from './SearchPanel';
import { ShopMenu } from './ShopMenu';
import { Wordmark } from './Wordmark';

const HOVER_DELAY_MS = 120;
const SHRINK_AFTER_PX = 80;

export function Header() {
  const { navigation } = useSiteContent();
  const location = useLocation();
  const scrolled = useScrolledPast(SHRINK_AFTER_PX);
  const setMenuOpen = useUiStore((s) => s.setMenuOpen);
  const searchOpen = useUiStore((s) => s.searchOpen);
  const setSearchOpen = useUiStore((s) => s.setSearchOpen);
  const [shopOpen, setShopOpen] = useState(false);
  const hoverTimer = useRef<number | undefined>(undefined);
  const shopTrigger = useRef<HTMLButtonElement>(null);
  const searchTrigger = useRef<HTMLButtonElement>(null);
  const mobileSearchTrigger = useRef<HTMLButtonElement>(null);
  const shopMenuId = useId();
  const searchPanelId = useId();

  // Header height shrinks from 72px to 64px after 80px of scroll (read by --header-h).
  useEffect(() => {
    document.documentElement.dataset.scrolled = String(scrolled);
  }, [scrolled]);

  const closeAll = useCallback(() => {
    window.clearTimeout(hoverTimer.current);
    setShopOpen(false);
    setSearchOpen(false);
  }, [setSearchOpen]);

  // Any navigation (including back and forward) closes open panels.
  const locationKey = `${location.pathname}${location.search}`;
  const [seenLocation, setSeenLocation] = useState(locationKey);
  if (seenLocation !== locationKey) {
    setSeenLocation(locationKey);
    setShopOpen(false);
  }
  useEffect(() => {
    window.clearTimeout(hoverTimer.current);
    setSearchOpen(false);
    setMenuOpen(false);
  }, [locationKey, setSearchOpen, setMenuOpen]);

  const openShopSoon = () => {
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => {
      setSearchOpen(false);
      setShopOpen(true);
    }, HOVER_DELAY_MS);
  };

  const toggleShop = () => {
    window.clearTimeout(hoverTimer.current);
    setSearchOpen(false);
    setShopOpen((v) => !v);
  };

  const toggleSearch = () => {
    window.clearTimeout(hoverTimer.current);
    setShopOpen(false);
    setSearchOpen(!searchOpen);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key !== 'Escape') return;
    if (shopOpen) {
      closeAll();
      shopTrigger.current?.focus();
    } else if (searchOpen) {
      closeAll();
      (searchTrigger.current?.offsetParent ? searchTrigger.current : mobileSearchTrigger.current)?.focus();
    }
  };

  // Focus leaving the header closes any open panel.
  const onBlur = (e: FocusEvent<HTMLElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) closeAll();
  };

  return (
    <>
      <header data-surface="petal" className="sticky top-0 z-header border-b-structure border-ink bg-petal text-ink">
        <div
          role="presentation"
          onKeyDown={onKeyDown}
          onBlur={onBlur}
          onMouseLeave={() => {
            window.clearTimeout(hoverTimer.current);
            setShopOpen(false);
          }}
        >
        <div className="container-page grid h-header grid-cols-3 items-center transition-all duration-150 ease-out">
          <div className="flex items-center">
            <IconButton label="Open menu" className="desk:hidden" onClick={() => setMenuOpen(true)}>
              <Menu aria-hidden="true" strokeWidth={1.5} strokeLinecap="butt" className="size-6" />
            </IconButton>
            <nav aria-label="Primary" className="hidden items-center gap-6 desk:flex">
              <div onMouseEnter={openShopSoon}>
                <button
                  ref={shopTrigger}
                  type="button"
                  aria-expanded={shopOpen}
                  aria-controls={shopMenuId}
                  onClick={toggleShop}
                  className="inline-flex h-11 items-center"
                >
                  <span className={cn(NAV_LABEL_CLASS, shopOpen && 'after:opacity-100')}>Shop</span>
                </button>
              </div>
              {navigation.map((item) => (
                <NavItem key={item.label} to={item.to}>
                  {item.label}
                </NavItem>
              ))}
            </nav>
          </div>

          <div className="justify-self-center">
            <Wordmark />
          </div>

          <div className="flex items-center justify-end">
            <button
              ref={searchTrigger}
              id="search-trigger"
              type="button"
              aria-expanded={searchOpen}
              aria-controls={searchPanelId}
              onClick={toggleSearch}
              className="hidden h-11 items-center desk:inline-flex"
            >
              <span className={cn(NAV_LABEL_CLASS, searchOpen && 'after:opacity-100')}>Search</span>
            </button>
            <IconButton
              ref={mobileSearchTrigger}
              label="Search"
              className="desk:hidden"
              aria-expanded={searchOpen}
              aria-controls={searchPanelId}
              onClick={toggleSearch}
            >
              <Search aria-hidden="true" strokeWidth={1.5} strokeLinecap="butt" className="size-6" />
            </IconButton>
          </div>
        </div>

        {shopOpen && <ShopMenu id={shopMenuId} onNavigate={closeAll} />}
        {searchOpen && <SearchPanel id={searchPanelId} onClose={closeAll} />}
        </div>
      </header>
      <MobileMenu />
    </>
  );
}
