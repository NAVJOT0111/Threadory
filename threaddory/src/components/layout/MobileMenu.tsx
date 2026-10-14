import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router';
import * as Dialog from '@radix-ui/react-dialog';
import * as RadixAccordion from '@radix-ui/react-accordion';
import { ChevronDown, X } from 'lucide-react';
import { IconButton } from '@/components/ui/IconButton';
import { RunningStitch } from '@/components/ui/RunningStitch';
import { useCategories, useSiteContent } from '@/hooks/useContent';
import { useUiStore } from '@/store/uiStore';
import { Wordmark } from './Wordmark';

const ROW_CLASS = 'flex h-16 w-full items-center justify-between font-display text-h2';

/** Full-screen dialog under 1024px. Radix handles focus trapping, Escape and scroll lock. */
export function MobileMenu() {
  const open = useUiStore((s) => s.menuOpen);
  const setOpen = useUiStore((s) => s.setMenuOpen);
  const categories = useCategories();
  const { navigation, footerColumns, socialLinks } = useSiteContent();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const close = () => setOpen(false);
  const help = footerColumns.find((c) => c.heading === 'Help')?.links ?? [];

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    close();
    setQuery('');
    navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Content
          aria-describedby={undefined}
          data-surface="petal"
          className="slide-in fixed inset-0 z-menu flex h-dvh flex-col overflow-y-auto bg-petal px-5 pb-safe text-ink"
        >
          <Dialog.Title className="sr-only">Menu</Dialog.Title>
          <div className="flex h-15 shrink-0 items-center justify-between">
            <Dialog.Close asChild>
              <IconButton label="Close menu">
                <X aria-hidden="true" strokeWidth={1.5} strokeLinecap="butt" className="size-6" />
              </IconButton>
            </Dialog.Close>
            <Wordmark onClick={close} />
            <span aria-hidden="true" className="size-11" />
          </div>

          <form role="search" onSubmit={submit} className="mt-4">
            <label htmlFor="mobile-search" className="sr-only">
              Search the shop
            </label>
            <input
              id="mobile-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the shop"
              className="h-13 w-full border-control border-ink bg-milk px-4 font-sans text-body text-ink placeholder:text-ink-muted"
            />
          </form>

          <nav aria-label="Primary" className="mt-6">
            <RadixAccordion.Root type="single" collapsible>
              <RadixAccordion.Item value="shop">
                <RadixAccordion.Header className="flex">
                  <RadixAccordion.Trigger className={`group ${ROW_CLASS}`}>
                    Shop
                    <ChevronDown
                      aria-hidden="true"
                      strokeWidth={1.5}
                      className="size-6 transition-transform duration-150 ease-out group-data-[state=open]:rotate-180"
                    />
                  </RadixAccordion.Trigger>
                </RadixAccordion.Header>
                <RadixAccordion.Content>
                  <ul className="pb-4">
                    {categories.map((c) => (
                      <li key={c.slug}>
                        <Link
                          to={`/shop/${c.slug}`}
                          onClick={close}
                          className="flex h-12 items-center font-display text-h3"
                        >
                          {c.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </RadixAccordion.Content>
              </RadixAccordion.Item>
            </RadixAccordion.Root>
            <RunningStitch />
            <ul>
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} onClick={close} className={ROW_CLASS}>
                    {item.label}
                  </Link>
                  <RunningStitch />
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto flex flex-col gap-3 py-8 font-sans text-body">
            {help.map((link) => (
              <Link key={link.label} to={link.to} onClick={close} className="inline-flex min-h-11 items-center">
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-6">
              {socialLinks.map((link) => (
                <Link key={link.label} to={link.to} onClick={close} className="inline-flex min-h-11 items-center link-underline">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
