/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    "index",
    "getting-started",
    "login-und-sicherheit",
    {
      type: "category",
      label: "Benutzerhandbuch",
      collapsed: false,
      items: [
        "benutzerhandbuch/benutzer-index",
        "benutzerhandbuch/rollen-und-berechtigungen",
        "benutzerhandbuch/formulare-und-arbeitsablaeufe",
        "benutzerhandbuch/datei-upload-und-download",
        "benutzerhandbuch/tipps-und-hinweise",
      ],
    },
    {
      type: "category",
      label: "Adminhandbuch (User-Administratoren)",
      collapsed: false,
      items: [
        "adminhandbuch/admin-index",
        "adminhandbuch/benutzerverwaltung",
        "adminhandbuch/rollen-und-berechtigungen",
        "adminhandbuch/sicherheit-und-best-practices",
        "adminhandbuch/support-und-kontakt",
      ],
    },
    "faq",
    "release-notes",
  ],
  releaseNotesSidebar: [
    {
      type: "category",
      label: "Release Notes",
      collapsed: false,
      items: [
        "release/release-index",
        "release/release-notes-2026-1",
        "release/release-notes-2026-3",
      ],
    },
  ],
};

module.exports = sidebars;
