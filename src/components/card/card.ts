// beta-card — Tier 3 extension of forge-card with playful styling
import '@adesso-forge/adforge-core';
import { LitElement, css } from 'lit';
import { property } from 'lit/decorators.js';

const ForgeCard = customElements.get('forge-card')!;

export class BetaCard extends (ForgeCard as unknown as typeof LitElement) {
  static css = [
    ...(Array.isArray((ForgeCard as any).css)
      ? (ForgeCard as any).css
      : (ForgeCard as any).css
        ? [(ForgeCard as any).css]
        : []),
    css`
      /* Beta playful card refinements */
      :host {
        --wa-card-border-radius: var(--wa-border-radius-l);
        border-radius: var(--wa-border-radius-l);
        transition: transform var(--wa-transition-medium) ease,
                    box-shadow var(--wa-transition-medium) ease;
      }

      :host(:hover) {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
      }

      :host([elevated]) {
        box-shadow: 0 4px 16px rgba(249, 115, 22, 0.15);
      }

      :host([elevated]:hover) {
        box-shadow: 0 8px 32px rgba(249, 115, 22, 0.25);
      }
    `,
  ];

  @property({ type: Boolean, reflect: true })
  elevated = false;
}

customElements.define('beta-card', BetaCard as unknown as CustomElementConstructor);
