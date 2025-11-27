import React from 'react';
import clsx from 'clsx';
import Badge from '../components/Badge.jsx';
import Button from '../components/button.jsx';
import Card, { CardHeader, CardBody } from '../components/Card.jsx';
import Input from '../components/Input.jsx';
import Label from '../components/label.jsx';

// Composant Section
function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-24 mb-10">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
        {subtitle && <p className="text-sm text-slate-600">{subtitle}</p>}
      </div>
      <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
        {children}
      </div>
    </section>
  );
}

// Composant Swatch
function Swatch({ label, className }) {
  return (
    <div className="flex items-center gap-3">
      <div className={clsx("w-8 h-8 rounded-md border border-border", className)} />
      <span className="text-sm text-slate-700">{label}</span>
    </div>
  );
}

// Composant principal
export default function Styleguide() {
  return (
    <div className="min-h-screen bg-surface">
      
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary" />
            <h1 className="text-lg font-semibold text-slate-900">Design System</h1>
            <a href="/" className="text-sm text-indigo-600 hover:underline">
              Page produit
            </a>
          </div>
          <nav className="hidden md:flex items-center gap-5 text-sm text-slate-700">
            <a href="#tokens" className="hover:text-slate-900">Tokens</a>
            <a href="#buttons" className="hover:text-slate-900">Buttons</a>
            <a href="#badges" className="hover:text-slate-900">Badges</a>
            <a href="#cards" className="hover:text-slate-900">Cards</a>
            <a href="#forms" className="hover:text-slate-900">Forms</a>
          </nav>
        </div>
      </header>

      {/* Layout avec sidebar */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-8 lg:grid-cols-[240px_1fr]">
        
        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-20 rounded-xl border border-border bg-white p-4 shadow-sm">
            <div className="text-xs font-semibold uppercase text-slate-500 mb-2">Sections</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#tokens" className="text-slate-700 hover:text-slate-900">🎨 Tokens</a></li>
              <li><a href="#buttons" className="text-slate-700 hover:text-slate-900">🔘 Buttons</a></li>
              <li><a href="#badges" className="text-slate-700 hover:text-slate-900">🏷️ Badges</a></li>
              <li><a href="#cards" className="text-slate-700 hover:text-slate-900">🃏 Cards</a></li>
              <li><a href="#forms" className="text-slate-700 hover:text-slate-900">📝 Forms</a></li>
            </ul>
          </div>
        </aside>

        {/* Contenu principal */}
        <main>
          
          {/* Section Tokens */}
          <Section id="tokens" title="Tokens" subtitle="Les couleurs de base">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="space-y-3">
                <div className="text-sm font-medium text-slate-900">Brand</div>
                <div className="space-y-2">
                  <Swatch label="Primary" className="bg-primary" />
                  <Swatch label="Secondary" className="bg-secondary" />
                  <Swatch label="Muted" className="bg-muted" />
                </div>
              </div>
            </div>
          </Section>

          {/* Section Buttons */}
          <Section id="buttons" title="Buttons" subtitle="Tous les styles de boutons">
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button disabled>Disabled</Button>
            </div>
          </Section>

          {/* Section Badges */}
          <Section id="badges" title="Badges" subtitle="Étiquettes de statut">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="default">Default</Badge>
              <Badge variant="success">En stock</Badge>
              <Badge variant="warning">Stock limité</Badge>
              <Badge variant="danger">Rupture</Badge>
            </div>
          </Section>

          {/* Section Cards */}
          <Section id="cards" title="Cards" subtitle="Conteneurs d'information">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <h3 className="font-semibold">Carte simple</h3>
                  <Badge variant="success">Nouveau</Badge>
                </CardHeader>
                <CardBody>
                  <p className="text-sm text-slate-600">Contenu de la carte.</p>
                </CardBody>
              </Card>
            </div>
          </Section>

          {/* Section Forms */}
          <Section id="forms" title="Forms" subtitle="Champs de formulaire">
            <form className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Nom</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit">Envoyer</Button>
              </div>
            </form>
          </Section>

          {/* Footer */}
          <footer className="pt-6 text-center text-xs text-slate-500">
            IUT-LENS 2025
          </footer>
        </main>
      </div>
    </div>
  );
}