import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import HeroParticles from '@site/src/components/HeroParticles';

function QuickAccessCard({ title, description, to, cta }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardText}>{description}</p>
      <Link className={styles.cardLink} to={to}>
        {cta}
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title="BVK Arbeitgeberportal - Benutzerhandbuch"
      description="Online-Dokumentation für Benutzer und User-Administratoren des BVK Arbeitgeberportals"
    >
      <header className={styles.hero}>
        <HeroParticles />
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>BVK Arbeitgeberportal</p>
              <h1 className={styles.heroTitle}>Benutzerhandbuch</h1>
              <p className={styles.heroSubtitle}>
                Willkommen in der Online-Dokumentation des Arbeitgeberportals.
                Hier finden Sie Anleitungen für Benutzer, User-Administratoren
                und schnelle Hilfe für häufige Fragen.
              </p>

              <div className={styles.heroActions}>
                <Link
                  className="button button--primary button--lg"
                  to="/docs/getting-started"
                >
                  Schnellstart
                </Link>
                <Link
                  className={styles.secondaryButton}
                  to="/docs/faq"
                >
                  FAQ öffnen
                </Link>
              </div>
            </div>

            <div className={styles.heroPanel}>
              <div className={styles.heroPanelBox}>
                <p className={styles.heroPanelLabel}>Direkteinstieg</p>
                <ul className={styles.heroPanelList}>
                  <li>
                    <Link to="/docs/benutzerhandbuch">Benutzerhandbuch</Link>
                  </li>
                  <li>
                    <Link to="/docs/adminhandbuch">Adminhandbuch</Link>
                  </li>
                  <li>
                    <Link to="/docs/login-und-sicherheit">Login &amp; Sicherheit</Link>
                  </li>
                  <li>
                    <Link to="/docs/faq">Häufige Fragen</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.sectionKicker}>Dokumentation</p>
              <h2 className={styles.sectionTitle}>Schnell zum richtigen Bereich</h2>
              <p className={styles.sectionText}>
                Wählen Sie den Bereich, der zu Ihrer Rolle oder Ihrem Anliegen passt.
              </p>
            </div>

            <div className={styles.grid}>
              <QuickAccessCard
                title="Benutzerhandbuch"
                description="Für Mitarbeitende, die mit Formularen, Dateien und Meldungen im Portal arbeiten."
                to="/docs/benutzerhandbuch"
                cta="Benutzerhandbuch öffnen"
              />
              <QuickAccessCard
                title="Adminhandbuch"
                description="Für User-Administratoren, die Benutzer verwalten und Rollen sowie Berechtigungen pflegen."
                to="/docs/adminhandbuch"
                cta="Adminhandbuch öffnen"
              />
              <QuickAccessCard
                title="FAQ"
                description="Für schnelle Antworten zu Login, Sicherheitscode, Timeout und typischen Fragen im Alltag."
                to="/docs/faq"
                cta="FAQ öffnen"
              />
            </div>
          </div>
        </section>

        <section className={styles.highlightSection}>
          <div className="container">
            <div className={styles.highlightBox}>
              <div>
                <p className={styles.sectionKicker}>Sicherheit</p>
                <h2 className={styles.highlightTitle}>Login und Zugriff</h2>
                <p className={styles.highlightText}>
                  Informationen zur Anmeldung, zum Sicherheitscode und zum Umgang
                  mit Login-Problemen finden Sie im Bereich Login &amp; Sicherheit.
                </p>
              </div>

              <Link
                className="button button--primary button--lg"
                to="/docs/login-und-sicherheit"
              >
                Zu Login &amp; Sicherheit
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}