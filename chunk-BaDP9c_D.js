import{n as s,t as r}from"./chunk-C9yOwMO6.js";import{$r as tN,A as Ga,Bt as UP,Ci as zP,Cn as Zl,D as GK,Di as zx,Dn as Zx,Dr as ne,E as Fv,Ei as zu,Fn as aS,Ft as T_,G as Jk,Gn as eg,Gt as Ut,H as J0,It as Tf,J as K,Jr as rr,Kt as Ux,L as Hx,Lt as Tr,Mt as Se,O as GP,On as _,P as Hk,Qr as se$1,Tn as Zn$1,U as Je,Ut as Ur,V as If,Vn as de,Vr as qe,Wr as qr,Wt as Us,Xn as f,Xr as sD,Xt as Vx,Y as KK,Yn as et,Yt as Vv,Z as K_,Zt as W,_n as Yr,a as $l,ai as vn,an as Xa,at as Kr,b as En$1,d as Bx,en as Wk,er as g,f as Ce,fi as xS,fr as jP,g as Df,gi as y,gr as kE,hn as Yk,ir as he,jr as or,k as G_,mi as xr,mn as Ya,n as $K,nt as Kl,on as Xm,pn as Y_,pt as N,qt as Ve$1,ri as tt,rt as Km,sr as hs,st as M,t as $A,ti as tf,tn as Wl,tr as ge,u as Ax,un as YK,ur as ir,vi as ye,vr as kx,wn as Zm,x as Et,xn as Za,xr as me,xt as Q,y as Ef,yn as ZK,yt as Pe$1,zn as cY}from"./chunk-C74CBOi9.js";import{A as Se$1,C as dr,D as ut,E as qa,F as mt,I as yt,M as _t,N as ft,O as za,P as ht$1,S as We$1,T as ki$1,_ as Ka,a as Ue$1,b as Ua,c as en,d as $a,f as Ba,g as Ha,h as Ga$1,i as Qe,j as Te,k as e,l as rn,m as Fa,n as J,o as Ye,p as De,r as Ke,s as Ze,t as ht,u as tn,v as Qn$1,w as ja,x as Va,y as Ti$1}from"./main-UM7HDCHR.js";import{a as nn,i as fe,o as tn$1,r as en$1,t as V}from"./chunk-B1BL4A04.js";import{n as w}from"./chunk-Du0uqn1q.js";import{n as ft$1}from"./chunk-BHinQ80I.js";var Ue=[{id:`workspace`,title:`Workspace`,icon:{name:`building-2`},collapsible:!0,items:[{id:`overview`,route:`/components/side-nav/overview`,label:`Overview`,icon:{name:`house`},visible:!0},{id:`projects`,route:`/components/side-nav/projects`,label:`Projects`,icon:{name:`folder`},visible:!0,data:{tags:[{text:`12`,config:{color:`info`}}]},children:[{id:`design`,route:`/components/side-nav/design`,label:`Design system`,icon:{name:`palette`},visible:!0,children:[{id:`library`,route:`/components/side-nav/library`,label:`Component library`,icon:{name:`blocks`},visible:!0,children:[...Array.from({length:14},(a,r)=>({id:`pattern-${r}`,route:`/components/side-nav/pattern-${r}`,label:`Pattern ${r+1}`,icon:{name:`component`},visible:!0})),{id:`tokens`,route:`/components/side-nav/tokens`,label:`Design tokens`,icon:{name:`swatch-book`},visible:!0,data:{label:{key:`nav.tokens`},keywords:[{key:`nav.palette`},{key:`nav.variables`}],endIcon:{name:`sparkles`},tags:[{text:{key:`nav.new`},config:{color:`success`}}]}},{id:`accessibility`,route:`/components/side-nav/accessibility`,label:`Accessibility`,icon:{name:`accessibility`},visible:!0}]},{id:`research`,route:`/components/side-nav/research`,label:`Research`,icon:{name:`flask-conical`},visible:!0}]},{id:`releases`,route:`/components/side-nav/releases`,label:`Releases`,icon:{name:`rocket`},visible:!0}]},{id:`reports`,route:`/components/side-nav/reports`,label:`Reports`,icon:{name:`chart-column`},visible:!0},{id:`disabled`,route:`/components/side-nav/disabled`,label:`Restricted area`,icon:{name:`lock`},visible:!0,data:{disabled:!0}}]},{id:`settings`,title:`Settings`,icon:{name:`settings`},collapsible:!0,items:[{id:`members`,route:`/components/side-nav/members`,label:`Team members`,icon:{name:`users`},visible:!0},{id:`billing`,route:`/components/side-nav/billing`,label:`Billing`,icon:{name:`credit-card`},visible:!0}]}];var Ge={en:{"top.name":`Demo top navigation`,"top.compact":`Force compact menu`,"top.width":`Preview width (px)`,"top.icons":`Leading icons`,"top.sticky":`Sticky bar`,"top.custom":`Custom item template`,"top.actions":`Extra action controls`,"top.title":`Workspace overview`,"top.description":`Labels navigate directly. Separate chevrons browse children in one panel. Search shows flat results with their parent paths. Select a result and clear search to reveal it in its submenu. Click a path ancestor to return to its panel. Shrink this preview or add actions to exercise the compact menu.`,"top.modeCompact":`Compact navigation: all pages remain reachable in the menu.`,"top.modeExpanded":`Horizontal navigation: use Left/Right, Home/End, or the separate disclosure controls.`,"top.settings":`Settings`,"top.actionDone":`Settings action selected.`,"top.help":`Help`,"top.helpDone":`Help action selected.`,"top.searchPlaceholder":`Search top navigation…`,"nav.workspace":`Workspace`,"nav.settings":`Settings`,"nav.overview":`Overview`,"nav.projects":`Projects`,"nav.design":`Design system`,"nav.library":`Component library`,"nav.tokens":`Design tokens`,"nav.accessibility":`Accessibility`,"nav.research":`Research`,"nav.releases":`Releases`,"nav.reports":`Reports`,"nav.disabled":`Restricted area`,"nav.members":`Team members`,"nav.billing":`Billing`,"nav.new":`New`,"nav.search":`Search demo navigation`,"nav.placeholder":`Try “dsgn tkns” or “palette”`,"nav.name":`Demo workspace`,"nav.clear":`Clear search`,"nav.empty":`No matching pages.`,"nav.open":`Open navigation`,"nav.close":`Close navigation`,"nav.collapse":`Collapse navigation`,"nav.expand":`Expand navigation`,"nav.submenu":`Open submenu`,"nav.result":`Search result`,"nav.back":`Back`,"nav.path":`Navigation path`,"demo.adjacent":`Use adjacent submenu panel`,"demo.inlineMode":`Submenus replace the list inside this navigation. Back restores the previous level.`,"demo.flyoutMode":`One adjacent submenu panel is shared by every nesting level.`,"demo.right":`Right side`,"demo.rail":`Icon rail`,"demo.mobile":`Force mobile drawer`,"demo.search":`Search`,"demo.rtl":`RTL`,"demo.custom":`Custom item template`,"demo.height":`Panel height (px)`,"demo.language":`Language`,"demo.instructions":`Select a label to visit its page, or its chevron to browse children. Search “dsgn tkns” or “palette” for flat results with parent paths. After selecting a result, clear search to reveal it in its submenu. Click an ancestor in the path to return to its panel.`,"demo.studio":`Studio`,"demo.admin":`Alex · Workspace admin`,"demo.title":`A calmer workspace`,"demo.description":`The header, footer, item presentation, side and panel size are configurable. The mobile drawer stays inside this preview.`,"demo.open":`Open demo drawer`,"demo.select":`Select a page to see its stable ID here.`,"demo.keyboard":`Use arrow keys and Home/End within a list. Enter or Space activates a disclosure. Back, Escape, or the opposite arrow returns one level; Escape at the root closes the mobile drawer.`,"demo.routes":`Configure real routes with withNav`,"nav.palette":`palette`,"nav.variables":`color variables`,"nav.pattern-0":`Pattern 1`,"nav.pattern-1":`Pattern 2`,"nav.pattern-2":`Pattern 3`,"nav.pattern-3":`Pattern 4`,"nav.pattern-4":`Pattern 5`,"nav.pattern-5":`Pattern 6`,"nav.pattern-6":`Pattern 7`,"nav.pattern-7":`Pattern 8`,"nav.pattern-8":`Pattern 9`,"nav.pattern-9":`Pattern 10`,"nav.pattern-10":`Pattern 11`,"nav.pattern-11":`Pattern 12`,"nav.pattern-12":`Pattern 13`,"nav.pattern-13":`Pattern 14`},es:{"top.name":`Navegación superior de demostración`,"top.compact":`Forzar menú compacto`,"top.width":`Ancho de la vista previa (px)`,"top.icons":`Iconos iniciales`,"top.sticky":`Barra fija`,"top.custom":`Plantilla de elemento personalizada`,"top.actions":`Controles de acción adicionales`,"top.title":`Resumen del espacio de trabajo`,"top.description":`Las etiquetas abren las páginas. Las flechas muestran las subpáginas en un panel. La búsqueda muestra resultados con sus rutas superiores. Selecciona un resultado y borra la búsqueda para verlo en su submenú. Selecciona un antecesor de la ruta para volver a su panel. Reduce esta vista previa o añade acciones para probar el menú compacto.`,"top.modeCompact":`Navegación compacta: todas las páginas siguen disponibles en el menú.`,"top.modeExpanded":`Navegación horizontal: usa Izquierda/Derecha, Inicio/Fin o los controles de expansión.`,"top.settings":`Configuración`,"top.actionDone":`Acción de configuración seleccionada.`,"top.help":`Ayuda`,"top.helpDone":`Acción de ayuda seleccionada.`,"top.searchPlaceholder":`Buscar en la navegación superior…`,"nav.workspace":`Espacio de trabajo`,"nav.settings":`Configuración`,"nav.overview":`Resumen`,"nav.projects":`Proyectos`,"nav.design":`Sistema de diseño`,"nav.library":`Biblioteca de componentes`,"nav.tokens":`Tokens de diseño`,"nav.accessibility":`Accesibilidad`,"nav.research":`Investigación`,"nav.releases":`Versiones`,"nav.reports":`Informes`,"nav.disabled":`Área restringida`,"nav.members":`Miembros del equipo`,"nav.billing":`Facturación`,"nav.new":`Nuevo`,"nav.search":`Buscar en la navegación de demostración`,"nav.placeholder":`Prueba «tokens» o «paleta»`,"nav.name":`Espacio de trabajo de demostración`,"nav.clear":`Borrar búsqueda`,"nav.empty":`No hay páginas coincidentes.`,"nav.open":`Abrir navegación`,"nav.close":`Cerrar navegación`,"nav.collapse":`Contraer navegación`,"nav.expand":`Expandir navegación`,"nav.submenu":`Abrir submenú`,"nav.result":`Resultado de búsqueda`,"nav.back":`Atrás`,"nav.path":`Ruta de navegación`,"demo.adjacent":`Usar panel de submenú adyacente`,"demo.inlineMode":`Los submenús reemplazan la lista de esta navegación. Atrás restaura el nivel anterior.`,"demo.flyoutMode":`Todos los niveles comparten un panel de submenú adyacente.`,"demo.right":`Lado derecho`,"demo.rail":`Barra de iconos`,"demo.mobile":`Forzar panel móvil`,"demo.search":`Búsqueda`,"demo.rtl":`De derecha a izquierda`,"demo.custom":`Plantilla de elemento personalizada`,"demo.height":`Altura del panel (px)`,"demo.language":`Idioma`,"demo.instructions":`Selecciona una etiqueta para visitar su página o su flecha para ver las subpáginas. Busca «tokens» o «paleta» para ver resultados con rutas superiores. Tras seleccionar un resultado, borra la búsqueda para verlo en su submenú. Selecciona un antecesor de la ruta para volver a su panel.`,"demo.studio":`Estudio`,"demo.admin":`Alex · Administrador del espacio de trabajo`,"demo.title":`Un espacio de trabajo más tranquilo`,"demo.description":`La cabecera, el pie, la presentación de los elementos, el lado y el tamaño del panel son configurables. El panel móvil permanece dentro de esta vista previa.`,"demo.open":`Abrir panel de demostración`,"demo.select":`Selecciona una página para ver aquí su identificador estable.`,"demo.keyboard":`Usa las flechas e Inicio/Fin en una lista. Intro o Espacio activa la expansión. Atrás, Escape o la flecha opuesta retrocede un nivel; Escape en la raíz cierra el panel móvil.`,"demo.routes":`Configura rutas reales con withNav`,"nav.palette":`paleta`,"nav.variables":`variables de color`,"nav.pattern-0":`Patrón 1`,"nav.pattern-1":`Patrón 2`,"nav.pattern-2":`Patrón 3`,"nav.pattern-3":`Patrón 4`,"nav.pattern-4":`Patrón 5`,"nav.pattern-5":`Patrón 6`,"nav.pattern-6":`Patrón 7`,"nav.pattern-7":`Patrón 8`,"nav.pattern-8":`Patrón 9`,"nav.pattern-9":`Patrón 10`,"nav.pattern-10":`Patrón 11`,"nav.pattern-11":`Patrón 12`,"nav.pattern-12":`Patrón 13`,"nav.pattern-13":`Patrón 14`},fr:{"top.name":`Navigation supérieure de démonstration`,"top.compact":`Forcer le menu compact`,"top.width":`Largeur de l’aperçu (px)`,"top.icons":`Icônes de début`,"top.sticky":`Barre fixe`,"top.custom":`Modèle d’élément personnalisé`,"top.actions":`Commandes supplémentaires`,"top.title":`Vue d’ensemble de l’espace de travail`,"top.description":`Les libellés ouvrent les pages. Les flèches affichent les sous-pages dans un panneau. La recherche affiche des résultats avec leurs chemins parents. Sélectionnez un résultat et effacez la recherche pour le voir dans son sous-menu. Sélectionnez un ancêtre du chemin pour revenir à son panneau. Réduisez cet aperçu ou ajoutez des actions pour essayer le menu compact.`,"top.modeCompact":`Navigation compacte : toutes les pages restent accessibles dans le menu.`,"top.modeExpanded":`Navigation horizontale : utilisez Gauche/Droite, Début/Fin ou les commandes de déploiement.`,"top.settings":`Paramètres`,"top.actionDone":`Action des paramètres sélectionnée.`,"top.help":`Aide`,"top.helpDone":`Action d’aide sélectionnée.`,"top.searchPlaceholder":`Rechercher dans la navigation supérieure…`,"nav.workspace":`Espace de travail`,"nav.settings":`Paramètres`,"nav.overview":`Vue d’ensemble`,"nav.projects":`Projets`,"nav.design":`Système de design`,"nav.library":`Bibliothèque de composants`,"nav.tokens":`Tokens de design`,"nav.accessibility":`Accessibilité`,"nav.research":`Recherche`,"nav.releases":`Versions`,"nav.reports":`Rapports`,"nav.disabled":`Zone restreinte`,"nav.members":`Membres de l’équipe`,"nav.billing":`Facturation`,"nav.new":`Nouveau`,"nav.search":`Rechercher dans la navigation de démonstration`,"nav.placeholder":`Essayez « tokens » ou « palette »`,"nav.name":`Espace de travail de démonstration`,"nav.clear":`Effacer la recherche`,"nav.empty":`Aucune page correspondante.`,"nav.open":`Ouvrir la navigation`,"nav.close":`Fermer la navigation`,"nav.collapse":`Réduire la navigation`,"nav.expand":`Déployer la navigation`,"nav.submenu":`Ouvrir le sous-menu`,"nav.result":`Résultat de recherche`,"nav.back":`Retour`,"nav.path":`Chemin de navigation`,"demo.adjacent":`Utiliser un panneau de sous-menu adjacent`,"demo.inlineMode":`Les sous-menus remplacent la liste de cette navigation. Retour restaure le niveau précédent.`,"demo.flyoutMode":`Tous les niveaux partagent un panneau de sous-menu adjacent.`,"demo.right":`Côté droit`,"demo.rail":`Barre d’icônes`,"demo.mobile":`Forcer le panneau mobile`,"demo.search":`Recherche`,"demo.rtl":`De droite à gauche`,"demo.custom":`Modèle d’élément personnalisé`,"demo.height":`Hauteur du panneau (px)`,"demo.language":`Langue`,"demo.instructions":`Sélectionnez un libellé pour visiter sa page ou sa flèche pour afficher les sous-pages. Recherchez « tokens » ou « palette » pour voir des résultats avec leurs chemins parents. Après avoir sélectionné un résultat, effacez la recherche pour le voir dans son sous-menu. Sélectionnez un ancêtre du chemin pour revenir à son panneau.`,"demo.studio":`Studio`,"demo.admin":`Alex · Administrateur de l’espace de travail`,"demo.title":`Un espace de travail plus calme`,"demo.description":`L’en-tête, le pied de page, la présentation des éléments, le côté et la taille du panneau sont configurables. Le panneau mobile reste dans cet aperçu.`,"demo.open":`Ouvrir le panneau de démonstration`,"demo.select":`Sélectionnez une page pour voir ici son identifiant stable.`,"demo.keyboard":`Utilisez les flèches et Début/Fin dans une liste. Entrée ou Espace active le déploiement. Retour, Échap ou la flèche opposée remonte d’un niveau ; Échap à la racine ferme le panneau mobile.`,"demo.routes":`Configurer des routes réelles avec withNav`,"nav.palette":`palette`,"nav.variables":`variables de couleur`,"nav.pattern-0":`Motif 1`,"nav.pattern-1":`Motif 2`,"nav.pattern-2":`Motif 3`,"nav.pattern-3":`Motif 4`,"nav.pattern-4":`Motif 5`,"nav.pattern-5":`Motif 6`,"nav.pattern-6":`Motif 7`,"nav.pattern-7":`Motif 8`,"nav.pattern-8":`Motif 9`,"nav.pattern-9":`Motif 10`,"nav.pattern-10":`Motif 11`,"nav.pattern-11":`Motif 12`,"nav.pattern-12":`Motif 13`,"nav.pattern-13":`Motif 14`},de:{"top.name":`Demo-Kopfnavigation`,"top.compact":`Kompaktes Menü erzwingen`,"top.width":`Vorschaubreite (px)`,"top.icons":`Führende Symbole`,"top.sticky":`Fixierte Leiste`,"top.custom":`Eigene Elementvorlage`,"top.actions":`Zusätzliche Aktionen`,"top.title":`Arbeitsbereich im Überblick`,"top.description":`Beschriftungen öffnen Seiten. Separate Pfeile zeigen Unterseiten in einem Bereich. Die Suche zeigt Ergebnisse mit ihren übergeordneten Pfaden. Wähle ein Ergebnis und lösche die Suche, um es im Untermenü zu sehen. Wähle einen übergeordneten Pfadeintrag, um zu dessen Bereich zurückzukehren. Verkleinere die Vorschau oder füge Aktionen hinzu, um das kompakte Menü zu testen.`,"top.modeCompact":`Kompakte Navigation: Alle Seiten bleiben über das Menü erreichbar.`,"top.modeExpanded":`Horizontale Navigation: Verwende Links/Rechts, Pos1/Ende oder die separaten Aufklappschaltflächen.`,"top.settings":`Einstellungen`,"top.actionDone":`Einstellungsaktion ausgewählt.`,"top.help":`Hilfe`,"top.helpDone":`Hilfeaktion ausgewählt.`,"top.searchPlaceholder":`Kopfnavigation durchsuchen…`,"nav.workspace":`Arbeitsbereich`,"nav.settings":`Einstellungen`,"nav.overview":`Übersicht`,"nav.projects":`Projekte`,"nav.design":`Designsystem`,"nav.library":`Komponentenbibliothek`,"nav.tokens":`Design-Tokens`,"nav.accessibility":`Barrierefreiheit`,"nav.research":`Forschung`,"nav.releases":`Versionen`,"nav.reports":`Berichte`,"nav.disabled":`Geschützter Bereich`,"nav.members":`Teammitglieder`,"nav.billing":`Abrechnung`,"nav.new":`Neu`,"nav.search":`Demo-Navigation durchsuchen`,"nav.placeholder":`Versuche „Tokens“ oder „Palette“`,"nav.name":`Demo-Arbeitsbereich`,"nav.clear":`Suche löschen`,"nav.empty":`Keine passenden Seiten.`,"nav.open":`Navigation öffnen`,"nav.close":`Navigation schließen`,"nav.collapse":`Navigation einklappen`,"nav.expand":`Navigation ausklappen`,"nav.submenu":`Untermenü öffnen`,"nav.result":`Suchergebnis`,"nav.back":`Zurück`,"nav.path":`Navigationspfad`,"demo.adjacent":`Angrenzenden Untermenübereich verwenden`,"demo.inlineMode":`Untermenüs ersetzen die Liste in dieser Navigation. Zurück stellt die vorherige Ebene wieder her.`,"demo.flyoutMode":`Alle Ebenen teilen sich einen angrenzenden Untermenübereich.`,"demo.right":`Rechte Seite`,"demo.rail":`Symbolleiste`,"demo.mobile":`Mobile Seitenleiste erzwingen`,"demo.search":`Suche`,"demo.rtl":`Von rechts nach links`,"demo.custom":`Eigene Elementvorlage`,"demo.height":`Bereichshöhe (px)`,"demo.language":`Sprache`,"demo.instructions":`Wähle eine Beschriftung, um ihre Seite zu öffnen, oder den Pfeil, um Unterseiten anzuzeigen. Suche nach „Tokens“ oder „Palette“ für Ergebnisse mit übergeordneten Pfaden. Lösche nach der Auswahl eines Ergebnisses die Suche, um es im Untermenü zu sehen. Wähle einen übergeordneten Pfadeintrag, um zu dessen Bereich zurückzukehren.`,"demo.studio":`Studio`,"demo.admin":`Alex · Arbeitsbereichsadministrator`,"demo.title":`Ein ruhigerer Arbeitsbereich`,"demo.description":`Kopfzeile, Fußzeile, Elementdarstellung, Seite und Bereichsgröße sind konfigurierbar. Die mobile Seitenleiste bleibt innerhalb dieser Vorschau.`,"demo.open":`Demo-Seitenleiste öffnen`,"demo.select":`Wähle eine Seite, um hier ihre stabile ID zu sehen.`,"demo.keyboard":`Verwende Pfeiltasten und Pos1/Ende innerhalb einer Liste. Eingabe oder Leertaste klappt Unterseiten auf. Zurück, Escape oder der entgegengesetzte Pfeil führt eine Ebene zurück; Escape auf der obersten Ebene schließt die mobile Seitenleiste.`,"demo.routes":`Echte Routen mit withNav konfigurieren`,"nav.palette":`Palette`,"nav.variables":`Farbvariablen`,"nav.pattern-0":`Muster 1`,"nav.pattern-1":`Muster 2`,"nav.pattern-2":`Muster 3`,"nav.pattern-3":`Muster 4`,"nav.pattern-4":`Muster 5`,"nav.pattern-5":`Muster 6`,"nav.pattern-6":`Muster 7`,"nav.pattern-7":`Muster 8`,"nav.pattern-8":`Muster 9`,"nav.pattern-9":`Muster 10`,"nav.pattern-10":`Muster 11`,"nav.pattern-11":`Muster 12`,"nav.pattern-12":`Muster 13`,"nav.pattern-13":`Muster 14`}};var Pe=[{label:`English`,value:`en`},{label:`Español`,value:`es`},{label:`Français`,value:`fr`},{label:`Deutsch`,value:`de`}];var q=class a{languages=Pe;version=_(0);language=_(`en`);translate(r){return this.version(),Ge[this.language()]?.[r]??r}setLanguage(r){r===null||r===this.language()||(this.language.set(r),this.version.update(e=>e+1))}static ɵfac=function(e){return new(e||a)};static ɵprov=N({token:a,factory:a.ɵfac})};function Oe(a,r$1){return r$1.version?.(),Ue.map(e=>s(r({},e),{title:r$1.translate(`nav.${e.id}`),items:cn(e.items,a,r$1)}))}function cn(a,r$2,e){return a.map(t=>s(r({},t),{route:`${r$2}/${t.id}`,label:e.translate(`nav.${t.id}`),data:s(r({},t.data),{label:{key:`nav.${t.id}`},keywords:[...t.data?.keywords??[],t.label]}),children:cn(t.children??[],r$2,e)}))}function Tn(a,r){if(a&1&&(W(0,`strong`),Ve$1(1),Q()),a&2){let e=de(2);M(),tt(e.text().brand)}}function Mn(a,r){if(a&1&&(W(0,`a`,13),Pe$1(1,`bx-icon`,14),me(2,Tn,2,1,`strong`),Q()),a&2){let e=r.$implicit,t=de();ye(`aria-label`,t.text().brand),M(2),ge(e?-1:2)}}function Dn(a,r){if(a&1){let e=hs();W(0,`button`,15),Ce(`click`,function(){Ur(e);let o=de(2);return qr(o.action.set(`top.actionDone`))}),Pe$1(1,`bx-icon`,16),Ve$1(2),Q(),W(3,`button`,15),Ce(`click`,function(){Ur(e);let o=de(2);return qr(o.action.set(`top.helpDone`))}),Pe$1(4,`bx-icon`,17),Ve$1(5),Q()}if(a&2){let e=de(2);M(2),tt(e.text().settings),M(3),tt(e.text().help)}}function Nn(a,r){if(a&1&&me(0,Dn,6,2),a&2){let e=de();ge(e.actions()?0:-1)}}function Pn(a,r){if(a&1&&(Pe$1(0,`bx-icon`,18),W(1,`span`),Ve$1(2),Q(),W(3,`small`,19),Ve$1(4,`↗`),Q()),a&2){let e=r.$implicit;he(`name`,e.icon?.name??`circle`),M(2),tt(e.label)}}var Ve=class a{translations=f(q);groups=y(()=>Oe(`/components/top-nav`,this.translations).map(e=>e.id!==`workspace`?e:s(r({},e),{items:e.items.filter(t=>t.id===`overview`||t.id===`projects`).map(t=>t.id!==`projects`?t:s(r({},t),{children:[...t.children??[],...e.items.filter(o=>o.id===`reports`||o.id===`disabled`)]}))})));compact=_(!1);searchable=_(!0);icons=_(!1);sticky=_(!1);rtl=_(!1);custom=_(!1);actions=_(!1);width=_(1100);selected=_(void 0);action=_(void 0);text=y(()=>({compact:this.translations.translate(`top.compact`),width:this.translations.translate(`top.width`),icons:this.translations.translate(`top.icons`),sticky:this.translations.translate(`top.sticky`),custom:this.translations.translate(`top.custom`),actions:this.translations.translate(`top.actions`),search:this.translations.translate(`demo.search`),rtl:this.translations.translate(`demo.rtl`),language:this.translations.translate(`demo.language`),brand:this.translations.translate(`demo.studio`),title:this.translations.translate(`top.title`),description:this.translations.translate(`top.description`),compactMode:this.translations.translate(`top.modeCompact`),expandedMode:this.translations.translate(`top.modeExpanded`),settings:this.translations.translate(`top.settings`),help:this.translations.translate(`top.help`)}));selection=y(()=>{let r=this.selected(),e=this.action();return e?this.translations.translate(e):r?`${this.translations.translate(`nav.${r.id}`)} \xB7 ${r.id}`:this.translations.translate(`demo.select`)});config=y(()=>({position:this.sticky()?`sticky`:`inline`,compactBreakpoint:`sm`,compact:this.compact()?!0:void 0,searchable:this.searchable(),showItemIcons:this.icons(),showSectionIcons:this.icons(),ariaLabel:{key:`top.name`},searchLabel:{key:`nav.search`},searchPlaceholder:{key:`top.searchPlaceholder`},clearSearchLabel:{key:`nav.clear`},emptyText:{key:`nav.empty`},openLabel:{key:`nav.open`},closeLabel:{key:`nav.close`},submenuLabel:{key:`nav.submenu`},resultLabel:{key:`nav.result`},backLabel:{key:`nav.back`},pathLabel:{key:`nav.path`}}));select(r){this.action.set(void 0),this.selected.set(r)}static ɵfac=function(e){return new(e||a)};static ɵcmp=se$1({type:a,selectors:[[`app-top-nav-examples`]],features:[Ut([q,{provide:qe,useExisting:q}])],decls:27,vars:32,consts:[[`nav`,``],[`customItem`,``],[1,`demo-language-row`],[`subscriptSizing`,`dynamic`,3,`selectionChange`,`label`,`clearable`,`options`,`value`],[1,`top-nav-demo-controls`],[3,`checkedChange`,`label`,`checked`],[`type`,`number`,3,`valueChange`,`label`,`min`,`max`,`value`],[1,`top-nav-demo-frame`],[3,`itemSelected`,`config`,`groups`,`itemTemplate`],[`bxTopNavBrand`,``],[`bxTopNavActions`,``],[1,`top-nav-demo-content`],[`aria-live`,`polite`],[`routerLink`,`/components/top-nav/overview`,1,`top-nav-demo-brand`],[`name`,`blocks`,`size`,`24`],[`bx-button`,``,`variant`,`tonal`,`color`,`grayscale`,`type`,`button`,3,`click`],[`name`,`settings`,`size`,`20`],[`name`,`circle-help`,`size`,`20`],[`size`,`20`,3,`name`],[`aria-hidden`,`true`]],template:function(e,t){if(e&1){let o=hs();W(0,`div`,2)(1,`bx-select`,3),Ce(`selectionChange`,function(g){return t.translations.setLanguage(g.value)}),Q()(),W(2,`div`,4)(3,`bx-checkbox`,5),K_(`checkedChange`,function(g){return Ur(o),Hk(t.compact,g)||(t.compact=g),qr(g)}),Q(),W(4,`bx-checkbox`,5),K_(`checkedChange`,function(g){return Ur(o),Hk(t.searchable,g)||(t.searchable=g),qr(g)}),Q(),W(5,`bx-checkbox`,5),K_(`checkedChange`,function(g){return Ur(o),Hk(t.icons,g)||(t.icons=g),qr(g)}),Q(),W(6,`bx-checkbox`,5),K_(`checkedChange`,function(g){return Ur(o),Hk(t.sticky,g)||(t.sticky=g),qr(g)}),Q(),W(7,`bx-checkbox`,5),K_(`checkedChange`,function(g){return Ur(o),Hk(t.rtl,g)||(t.rtl=g),qr(g)}),Q(),W(8,`bx-checkbox`,5),K_(`checkedChange`,function(g){return Ur(o),Hk(t.custom,g)||(t.custom=g),qr(g)}),Q(),W(9,`bx-checkbox`,5),K_(`checkedChange`,function(g){return Ur(o),Hk(t.actions,g)||(t.actions=g),qr(g)}),Q(),W(10,`bx-input-field`,6),K_(`valueChange`,function(g){return Ur(o),Hk(t.width,g)||(t.width=g),qr(g)}),Q()(),W(11,`div`,7)(12,`bx-top-nav`,8,0),Ce(`itemSelected`,function(g){return t.select(g)}),T_(14,Mn,3,2,`ng-template`,9)(15,Nn,1,1,`ng-template`,10),Q(),W(16,`div`,11)(17,`h3`),Ve$1(18),Q(),W(19,`p`),Ve$1(20),Q(),W(21,`p`),Ve$1(22),Q(),W(23,`output`,12),Ve$1(24),Q()()(),T_(25,Pn,5,2,`ng-template`,null,1,eg)}if(e&2){let o=Ya(13),c=Ya(26);M(),he(`label`,t.text().language)(`clearable`,!1)(`options`,t.translations.languages)(`value`,t.translations.language()),M(2),he(`label`,t.text().compact),Y_(`checked`,t.compact),M(),he(`label`,t.text().search),Y_(`checked`,t.searchable),M(),he(`label`,t.text().icons),Y_(`checked`,t.icons),M(),he(`label`,t.text().sticky),Y_(`checked`,t.sticky),M(),he(`label`,t.text().rtl),Y_(`checked`,t.rtl),M(),he(`label`,t.text().custom),Y_(`checked`,t.custom),M(),he(`label`,t.text().actions),Y_(`checked`,t.actions),M(),he(`label`,t.text().width)(`min`,280)(`max`,1600),Y_(`value`,t.width),M(),et(`width`,t.width()+`px`),ye(`dir`,t.rtl()?`rtl`:`ltr`),M(),he(`config`,t.config())(`groups`,t.groups())(`itemTemplate`,t.custom()?c:void 0),M(6),tt(t.text().title),M(2),tt(t.text().description),M(2),tt(o.isCompact()?t.text().compactMode:t.text().expandedMode),M(2),tt(t.selection())}},dependencies:[kE,Te,_t,yt,If,Qn$1,Ti$1,ki$1,Et],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-width: 0;
  width: 100%;
}
.demo-language-row[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
  inline-size: 100%;
  min-inline-size: 0;
  margin-block-end: 1rem;
}
.demo-language-row[_ngcontent-%COMP%]   bx-select[_ngcontent-%COMP%] {
  inline-size: 12rem;
  max-inline-size: 100%;
}
.top-nav-demo-controls[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  margin-block-end: 1rem;
}
.top-nav-demo-controls[_ngcontent-%COMP%]   bx-input-field[_ngcontent-%COMP%] {
  inline-size: 12rem;
  max-inline-size: 100%;
}
.top-nav-demo-frame[_ngcontent-%COMP%] {
  position: relative;
  isolation: isolate;
  max-height: 28rem;
  overflow: auto;
  max-width: 100%;
  min-width: 0;
  min-height: 20rem;
  background: var(--%NS%bx-bg-canvas);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.75rem;
}
.top-nav-demo-brand[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--%NS%bx-text-primary);
  text-decoration: none;
}
.top-nav-demo-brand[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 2px;
}
.top-nav-demo-content[_ngcontent-%COMP%] {
  min-height: 28rem;
  padding: 1rem;
  overflow-wrap: anywhere;
}
.top-nav-demo-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin-block-start: 0;
}
.top-nav-demo-content[_ngcontent-%COMP%]   output[_ngcontent-%COMP%] {
  display: block;
  padding-block: 0.75rem;
  color: var(--%NS%bx-text-secondary);
}`]})};var dn=`const navigation = defineNavigation({
  sections: [{ id: 'workspace', title: 'Workspace', icon: { name: 'building-2' },
    collapsible: true, showInBreadcrumbs: true }],
  sideNav: { side: 'left', persistenceKey: 'my-app.navigation' }
});
const { withNav } = navigation;
export const routes: Routes = [withNav({ path: 'projects', children: [
  withNav({ path: 'tokens', loadComponent: () => import('./tokens').then(m => m.Tokens) },
    { label: { key: 'nav.tokens' }, icon: { name: 'swatch-book' },
      keywords: ['palette'], tags: [{ text: 'New' }], showInBreadcrumbs: false })
]}, { label: 'Projects', section: 'workspace', icon: { name: 'folder' } })];
// In application providers:
provideRouter(routes), provideNavigation(navigation.config)
// In your shell: <bx-side-nav />`;function On(a,r){if(a&1&&(W(0,`strong`),Ve$1(1),Q()),a&2){let e=de(2);M(),tt(e.text().studio)}}function Vn(a,r){if(a&1&&(Pe$1(0,`bx-icon`,17),me(1,On,2,1,`strong`)),a&2){let e=r.$implicit,t=r.mobile;M(),ge(!e&&!t?1:-1)}}function In(a,r){if(a&1&&(W(0,`span`),Ve$1(1),Q()),a&2){let e=de(2);M(),tt(e.text().admin)}}function Ln(a,r){if(a&1&&(Pe$1(0,`bx-icon`,18),me(1,In,2,1,`span`)),a&2){let e=r.$implicit;M(),ge(e?-1:1)}}function An(a,r){if(a&1){let e=hs();W(0,`button`,19),Ce(`click`,function(o){Ur(e),de();let c=Ya(15);return qr(c.open(o))}),Ve$1(1),Q()}if(a&2){let e=de();M(),tt(e.text().open)}}function Fn(a,r){if(a&1&&(W(0,`span`),Ve$1(1),Q(),W(2,`small`,21),Ve$1(3,`↗`),Q()),a&2){let e=de().$implicit;M(),tt(e.label)}}function zn(a,r){if(a&1&&(Pe$1(0,`bx-icon`,20),me(1,Fn,4,1)),a&2){let e=r.$implicit,t=r.collapsed;he(`name`,e.icon?.name??`circle`),M(),ge(t?-1:1)}}var Ie=class a{translations=f(q);groups=y(()=>Oe(`/components/side-nav`,this.translations));text=y(()=>({right:this.translations.translate(`demo.right`),rail:this.translations.translate(`demo.rail`),mobile:this.translations.translate(`demo.mobile`),adjacent:this.translations.translate(`demo.adjacent`),inlineMode:this.translations.translate(`demo.inlineMode`),flyoutMode:this.translations.translate(`demo.flyoutMode`),search:this.translations.translate(`demo.search`),rtl:this.translations.translate(`demo.rtl`),custom:this.translations.translate(`demo.custom`),height:this.translations.translate(`demo.height`),language:this.translations.translate(`demo.language`),instructions:this.translations.translate(`demo.instructions`),studio:this.translations.translate(`demo.studio`),admin:this.translations.translate(`demo.admin`),title:this.translations.translate(`demo.title`),description:this.translations.translate(`demo.description`),open:this.translations.translate(`demo.open`),keyboard:this.translations.translate(`demo.keyboard`),routes:this.translations.translate(`demo.routes`)}));routeExample=dn;right=_(!1);collapsed=_(!1);mobile=_(!1);adjacent=_(!1);searchable=_(!0);rtl=_(!1);custom=_(!1);height=_(420);selected=_(void 0);selection=y(()=>{let r=this.selected();return r?`${this.translations.translate(`nav.${r.id}`)} \xB7 ${r.id}`:this.translations.translate(`demo.select`)});config=y(()=>({position:`inline`,showMobileTrigger:!1,side:this.right()?`right`:`left`,mobile:this.mobile(),submenuMode:this.adjacent()?`flyout`:`auto`,searchable:this.searchable(),persistenceKey:`blocks.side-nav.demo.v1`,ariaLabel:{key:`nav.name`},searchLabel:{key:`nav.search`},searchPlaceholder:{key:`nav.placeholder`},clearSearchLabel:{key:`nav.clear`},emptyText:{key:`nav.empty`},openLabel:{key:`nav.open`},closeLabel:{key:`nav.close`},collapseLabel:{key:`nav.collapse`},expandLabel:{key:`nav.expand`},submenuLabel:{key:`nav.submenu`},resultLabel:{key:`nav.result`},backLabel:{key:`nav.back`},pathLabel:{key:`nav.path`}}));select(r){this.selected.set(r)}static ɵfac=function(e){return new(e||a)};static ɵcmp=se$1({type:a,selectors:[[`app-side-nav-examples`]],features:[Ut([q,{provide:qe,useExisting:q}])],decls:37,vars:40,consts:[[`nav`,``],[`customItem`,``],[1,`demo-language-row`],[`subscriptSizing`,`dynamic`,3,`selectionChange`,`label`,`clearable`,`options`,`value`],[1,`nav-demo-controls`],[3,`checkedChange`,`label`,`checked`],[`type`,`number`,3,`valueChange`,`label`,`min`,`max`,`value`],[1,`nav-demo-frame`],[3,`collapsedChange`,`itemSelected`,`config`,`groups`,`collapsed`,`itemTemplate`],[`bxSideNavHeader`,``],[`bxSideNavFooter`,``],[1,`nav-demo-content`],[`bx-button`,``,`variant`,`tonal`],[`aria-live`,`polite`],[1,`nav-route-example`],[`tabindex`,`0`,`aria-label`,`TypeScript navigation configuration`,1,`playground-code-block`],[`language`,`typescript`,3,`highlight`],[`name`,`blocks`],[`name`,`circle-user-round`],[`bx-button`,``,`variant`,`tonal`,3,`click`],[`size`,`20`,3,`name`],[`aria-hidden`,`true`]],template:function(e,t){if(e&1){let o=hs();W(0,`div`,2)(1,`bx-select`,3),Ce(`selectionChange`,function(g){return t.translations.setLanguage(g.value)}),Q()(),W(2,`div`,4)(3,`bx-checkbox`,5),K_(`checkedChange`,function(g){return Ur(o),Hk(t.right,g)||(t.right=g),qr(g)}),Q(),W(4,`bx-checkbox`,5),Ce(`checkedChange`,function(g){return t.collapsed.set(g)}),Q(),W(5,`bx-checkbox`,5),K_(`checkedChange`,function(g){return Ur(o),Hk(t.mobile,g)||(t.mobile=g),qr(g)}),Q(),W(6,`bx-checkbox`,5),K_(`checkedChange`,function(g){return Ur(o),Hk(t.adjacent,g)||(t.adjacent=g),qr(g)}),Q(),W(7,`bx-checkbox`,5),K_(`checkedChange`,function(g){return Ur(o),Hk(t.searchable,g)||(t.searchable=g),qr(g)}),Q(),W(8,`bx-checkbox`,5),K_(`checkedChange`,function(g){return Ur(o),Hk(t.rtl,g)||(t.rtl=g),qr(g)}),Q(),W(9,`bx-checkbox`,5),K_(`checkedChange`,function(g){return Ur(o),Hk(t.custom,g)||(t.custom=g),qr(g)}),Q(),W(10,`bx-input-field`,6),K_(`valueChange`,function(g){return Ur(o),Hk(t.height,g)||(t.height=g),qr(g)}),Q()(),W(11,`p`),Ve$1(12),Q(),W(13,`div`,7)(14,`bx-side-nav`,8,0),K_(`collapsedChange`,function(g){return Ur(o),Hk(t.collapsed,g)||(t.collapsed=g),qr(g)}),Ce(`itemSelected`,function(g){return t.select(g)}),T_(16,Vn,2,1,`ng-template`,9)(17,Ln,2,1,`ng-template`,10),Q(),W(18,`div`,11)(19,`h3`),Ve$1(20),Q(),W(21,`p`),Ve$1(22),Q(),me(23,An,2,1,`button`,12),W(24,`output`,13),Ve$1(25),Q(),W(26,`p`),Ve$1(27),Q(),W(28,`p`),Ve$1(29),Q()()(),T_(30,zn,2,2,`ng-template`,null,1,eg),W(32,`details`,14)(33,`summary`),Ve$1(34),Q(),W(35,`pre`,15),Pe$1(36,`code`,16),Q()()}if(e&2){let o=Ya(15),c=Ya(31);M(),he(`label`,t.text().language)(`clearable`,!1)(`options`,t.translations.languages)(`value`,t.translations.language()),M(2),he(`label`,t.text().right),Y_(`checked`,t.right),M(),he(`label`,t.text().rail)(`checked`,t.collapsed()??!1),M(),he(`label`,t.text().mobile),Y_(`checked`,t.mobile),M(),he(`label`,t.text().adjacent),Y_(`checked`,t.adjacent),M(),he(`label`,t.text().search),Y_(`checked`,t.searchable),M(),he(`label`,t.text().rtl),Y_(`checked`,t.rtl),M(),he(`label`,t.text().custom),Y_(`checked`,t.custom),M(),he(`label`,t.text().height)(`min`,200)(`max`,700),Y_(`value`,t.height),M(2),tt(t.text().instructions),M(),et(`--%NS%bx-side-nav-height`,t.height()+`px`),ne(`right`,t.right()),ye(`dir`,t.rtl()?`rtl`:`ltr`),M(),he(`config`,t.config())(`groups`,t.groups()),Y_(`collapsed`,t.collapsed),he(`itemTemplate`,t.custom()?c:void 0),M(6),tt(t.text().title),M(2),tt(t.text().description),M(),ge(o.isMobile()?23:-1),M(2),tt(t.selection()),M(2),tt(t.text().keyboard),M(2),tt(o.isInlineSubmenus()?t.text().inlineMode:t.text().flyoutMode),M(5),tt(t.text().routes),M(2),he(`highlight`,t.routeExample)}},dependencies:[ht,Se$1,ht$1,ft,If,Qn$1,Ti$1,ki$1,Et],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-width: 0;
  width: 100%;
}
.demo-language-row[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
  inline-size: 100%;
  min-inline-size: 0;
  margin-block-end: 1rem;
}
.demo-language-row[_ngcontent-%COMP%]   bx-select[_ngcontent-%COMP%] {
  inline-size: 12rem;
  max-inline-size: 100%;
}
.nav-demo-controls[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  margin-block-end: 1rem;
}
.nav-demo-controls[_ngcontent-%COMP%]   bx-input-field[_ngcontent-%COMP%] {
  inline-size: 12rem;
  max-inline-size: 100%;
}
.nav-demo-frame[_ngcontent-%COMP%] {
  position: relative;
  isolation: isolate;
  display: flex;
  min-width: 0;
  width: 100%;
  min-height: var(--%NS%bx-side-nav-height, 420px);
  overflow: hidden;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.75rem;
  background: var(--%NS%bx-bg-canvas);
}
.nav-demo-content[_ngcontent-%COMP%] {
  min-width: 0;
  flex: 1;
  padding: 1rem;
  overflow-wrap: anywhere;
}
.nav-demo-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin-top: 0;
}
.nav-demo-content[_ngcontent-%COMP%]   output[_ngcontent-%COMP%] {
  display: block;
  padding-block: 1rem;
  color: var(--%NS%bx-text-brand);
}
.nav-route-example[_ngcontent-%COMP%] {
  margin-top: 1rem;
}
@media (max-width: 640px) {
  .nav-demo-frame[_ngcontent-%COMP%] {
    flex-direction: column;
  }
  .nav-demo-frame[_ngcontent-%COMP%]   bx-side-nav[_ngcontent-%COMP%] {
    max-width: 100%;
  }
}`]})};var mn=[{label:`Accent`,value:`accent`},{label:`Primary`,value:`primary`},{label:`Success`,value:`success`},{label:`Danger`,value:`danger`},{label:`Info`,value:`info`},{label:`Warning`,value:`warn`},{label:`Neutral`,value:`neutral`}];var pn=[{label:`Tonal`,value:`tonal`},{label:`Filled`,value:`filled`},{label:`Outlined`,value:`outlined`}];var un={en:{language:`Language`,tagLabel:`Skopje`,loadMore:`Load more locations`,loading:`Loading locations`,retry:`Retry request`,searchLabel:`Find a component`,searchPlaceholder:`Try menu`,searchLoading:`Searching components`,searchClear:`Clear search`,searchEmpty:`No components match your search.`,searchError:`The search request failed. Retry to search again.`,project:`Project name`,clearSelection:`Clear selection`,clearSelectionTooltip:`Remove the current selection`,selectAll:`Select all locations`,allLocations:`All locations`,allLocationsTooltip:`All {total} selectable locations`,locationsSelected:`{count} locations selected`},es:{language:`Idioma`,tagLabel:`Skopie`,loadMore:`Cargar más ubicaciones`,loading:`Cargando ubicaciones`,retry:`Reintentar solicitud`,searchLabel:`Buscar un componente`,searchPlaceholder:`Prueba menu`,searchLoading:`Buscando componentes`,searchClear:`Borrar búsqueda`,searchEmpty:`Ningún componente coincide con tu búsqueda.`,searchError:`La búsqueda ha fallado. Vuelve a intentarlo.`,project:`Nombre del proyecto`,clearSelection:`Borrar selección`,clearSelectionTooltip:`Eliminar la selección actual`,selectAll:`Seleccionar todas las ubicaciones`,allLocations:`Todas las ubicaciones`,allLocationsTooltip:`Las {total} ubicaciones seleccionables`,locationsSelected:`{count} ubicaciones seleccionadas`},fr:{language:`Langue`,tagLabel:`Skopje`,loadMore:`Charger plus de lieux`,loading:`Chargement des lieux`,retry:`Réessayer la demande`,searchLabel:`Trouver un composant`,searchPlaceholder:`Essayez menu`,searchLoading:`Recherche de composants`,searchClear:`Effacer la recherche`,searchEmpty:`Aucun composant ne correspond à votre recherche.`,searchError:`La recherche a échoué. Réessayez.`,project:`Nom du projet`,clearSelection:`Effacer la sélection`,clearSelectionTooltip:`Supprimer la sélection actuelle`,selectAll:`Sélectionner tous les lieux`,allLocations:`Tous les lieux`,allLocationsTooltip:`Les {total} lieux sélectionnables`,locationsSelected:`{count} lieux sélectionnés`},de:{language:`Sprache`,tagLabel:`Skopje`,loadMore:`Weitere Standorte laden`,loading:`Standorte werden geladen`,retry:`Anfrage wiederholen`,searchLabel:`Komponente finden`,searchPlaceholder:`Versuche menu`,searchLoading:`Komponenten werden gesucht`,searchClear:`Suche löschen`,searchEmpty:`Keine Komponenten entsprechen deiner Suche.`,searchError:`Die Suche ist fehlgeschlagen. Versuche es erneut.`,project:`Projektname`,clearSelection:`Auswahl löschen`,clearSelectionTooltip:`Aktuelle Auswahl entfernen`,selectAll:`Alle Standorte auswählen`,allLocations:`Alle Standorte`,allLocationsTooltip:`Alle {total} auswählbaren Standorte`,locationsSelected:`{count} Standorte ausgewählt`}};var z=class a{language=_(`en`);languages=Pe;version=_(0);translate(r,e){let t=un[this.language()]?.[r]??r;for(let[o,c]of Object.entries(e??{}))t=t.replaceAll(`{${o}}`,String(c));return t}setLanguage(r){r===null||r===this.language()||(this.language.set(r),this.version.update(e=>e+1))}static ɵfac=function(e){return new(e||a)};static ɵprov=N({token:a,factory:a.ɵfac})};var gn=`<span bxTruncate #overflow="bxTruncate"
    [bxTooltip]="label() | bxTruncatedText: overflow.truncated()"
    [attr.tabindex]="overflow.truncated() ? 0 : null"
    bxTooltipTouch="longpress">{{ label() }}</span>`;var bn=`<bx-tag [text]="label()" [tooltipOnTruncate]="false" tooltip="My application tooltip" />
<bx-input-field [label]="label()" [tooltipOnTruncate]="false" />
<bx-select label="Location" [options]="options()" [tooltipOnTruncate]="false" />`;var _n=`import { TruncateDirective, TruncatedTextPipe, TooltipDirective, truncatedText } from '@filip.mazev/blocks/primitives';

// Read the exported directive's truncated() and text() signals in your own logic.
const tooltip = truncatedText(label(), overflow.truncated(), automaticTooltips());

// Application-wide form default; individual controls can override it.
formSettings.update({ tooltipOnTruncate: false });`;var Wn=()=>[0];var se=class a{text=_(`A long location name that can be truncated`);width=_(14);enabled=_(!0);largeText=_(!1);automaticTooltips=_(!0);customTooltip=_(!1);menuActions=_(0);label=y(()=>String(this.text()??``));options=y(()=>[{label:this.label(),value:0}]);pipeExample=gn;customExample=bn;logicExample=_n;previewWidth=y(()=>{let r=Number(this.width());return Number.isFinite(r)?Math.max(4,Math.min(64,r)):14});static ɵfac=function(e){return new(e||a)};static ɵcmp=se$1({type:a,selectors:[[`app-truncation-examples`]],decls:96,vars:55,consts:[[`overflow`,`bxTruncate`],[`aria-label`,`Conditional truncation tooltips`,1,`truncation-demo`],[1,`truncation-controls`],[`label`,`Text`,`subscriptSizing`,`dynamic`,3,`valueChange`,`value`],[`label`,`Available width (rem)`,`type`,`number`,`subscriptSizing`,`dynamic`,3,`valueChange`,`min`,`max`,`value`],[`role`,`group`,`aria-label`,`Preview options`,1,`truncation-switches`],[`label`,`Enable text truncation`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Larger text preview`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Automatic tooltips`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Custom tooltip`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[1,`component-examples`],[1,`preview-card`,`text-preview-card`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Text preview`,1,`preview-stage`],[1,`text-example`,`example-width`],[`bxTooltipTouch`,`longpress`,`placement`,`top`,3,`bxTruncate`,`bxTooltip`],[1,`preview-caption`],[1,`preview-card`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Tag preview`,1,`preview-stage`],[1,`example-width`],[`leadingIcon`,`map-pin`,3,`text`,`tooltipOnTruncate`,`tooltip`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Input field preview`,1,`preview-stage`],[`placeholder`,`Editable value`,`subscriptSizing`,`dynamic`,3,`label`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Search value preview`,1,`preview-stage`],[`ariaLabel`,`Search value`,`subscriptSizing`,`dynamic`,3,`search`,`value`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Select preview`,1,`preview-stage`],[`subscriptSizing`,`dynamic`,3,`label`,`options`,`value`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Multiselect preview`,1,`preview-stage`],[`label`,`Selected tag`,`selectionDisplay`,`tags`,`subscriptSizing`,`dynamic`,3,`options`,`value`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Menu item preview`,1,`preview-stage`],[3,`action`,`label`,`wrapLabel`,`tooltipOnTruncate`],[`tabindex`,`0`,`aria-label`,`HTML truncation example`,1,`playground-code-block`],[`language`,`xml`,3,`highlight`],[`tabindex`,`0`,`aria-label`,`TypeScript truncation example`,1,`playground-code-block`],[`language`,`typescript`,3,`highlight`]],template:function(e,t){if(e&1){let o=hs();W(0,`section`,1)(1,`h3`),Ve$1(2,`Shared truncation, optional tooltips`),Q(),W(3,`p`)(4,`code`),Ve$1(5,`TruncateDirective`),Q(),Ve$1(6,` owns ellipsis and rendered measurement. The pure `),W(7,`code`),Ve$1(8,`bxTruncatedText`),Q(),Ve$1(9,` pipe selects text for a conditional tooltip. Use the exported directive signals or `),W(10,`code`),Ve$1(11,`truncatedText()`),Q(),Ve$1(12,` helper in your own logic.`),Q(),W(13,`div`,2)(14,`bx-input-field`,3),K_(`valueChange`,function(g){return Ur(o),Hk(t.text,g)||(t.text=g),qr(g)}),Q(),W(15,`bx-input-field`,4),K_(`valueChange`,function(g){return Ur(o),Hk(t.width,g)||(t.width=g),qr(g)}),Q()(),W(16,`div`,5)(17,`bx-checkbox`,6),K_(`checkedChange`,function(g){return Ur(o),Hk(t.enabled,g)||(t.enabled=g),qr(g)}),Q(),W(18,`bx-checkbox`,7),K_(`checkedChange`,function(g){return Ur(o),Hk(t.largeText,g)||(t.largeText=g),qr(g)}),Q(),W(19,`bx-checkbox`,8),K_(`checkedChange`,function(g){return Ur(o),Hk(t.automaticTooltips,g)||(t.automaticTooltips=g),qr(g)}),Q(),W(20,`bx-checkbox`,9),K_(`checkedChange`,function(g){return Ur(o),Hk(t.customTooltip,g)||(t.customTooltip=g),qr(g)}),Q()(),W(21,`div`,10)(22,`section`,11)(23,`h4`),Ve$1(24,`Text preview`),Q(),W(25,`div`,12)(26,`div`,13)(27,`span`,14,0),Za(29,`bxTruncatedText`),Ve$1(30),Q()()(),W(31,`output`,15),Ve$1(32),Q()(),W(33,`section`,16)(34,`h4`),Ve$1(35,`Tag`),Q(),W(36,`div`,17)(37,`div`,18),Pe$1(38,`bx-tag`,19),Q()(),W(39,`p`,15),Ve$1(40,`Clipped labels use an automatic or application-owned tooltip.`),Q()(),W(41,`section`,16)(42,`h4`),Ve$1(43,`Input field`),Q(),W(44,`div`,20)(45,`div`,18),Pe$1(46,`bx-input-field`,21),Q()(),W(47,`p`,15),Ve$1(48,`The floating label shares the truncation measurement.`),Q()(),W(49,`section`,16)(50,`h4`),Ve$1(51,`Search value`),Q(),W(52,`div`,22)(53,`div`,18)(54,`bx-search-input`,23),Ce(`search`,function(g){return t.text.set(g)}),Q()()(),W(55,`p`,15),Ve$1(56,`Editing the search updates the shared example text.`),Q()(),W(57,`section`,16)(58,`h4`),Ve$1(59,`Select`),Q(),W(60,`div`,24)(61,`div`,18),Pe$1(62,`bx-select`,25),Q()(),W(63,`p`,15),Ve$1(64,`Selected values and captions share the same available width.`),Q()(),W(65,`section`,16)(66,`h4`),Ve$1(67,`Multiselect`),Q(),W(68,`div`,26)(69,`div`,18),Pe$1(70,`bx-multi-select`,27),Q()(),W(71,`p`,15),Ve$1(72,`The selected tag follows the owning control's tooltip setting.`),Q()(),W(73,`section`,16)(74,`h4`),Ve$1(75,`Menu item`),Q(),W(76,`div`,28)(77,`div`,18)(78,`bx-menu`)(79,`bx-menu-item`,29),Ce(`action`,function(){return t.menuActions.set(t.menuActions()+1)}),Q()()()(),W(80,`output`,15),Ve$1(81),Q()()(),W(82,`p`),Ve$1(83,`Change the text or width to switch between clipped and fitting labels. Turn automatic tooltips off to retain ellipsis and measurement for custom feedback. Hover, keyboard focus, and touch-and-hold use the existing tooltip mechanism. Explicit tag descriptions still take precedence. Custom tooltip applies to the text and tag examples. Preview panels keep their size; long wrapped content scrolls inside them. Example widths are capped by the available space in each card.`),Q(),W(84,`h3`),Ve$1(85,`Short conditional tooltip`),Q(),W(86,`pre`,30),Pe$1(87,`code`,31),Q(),W(88,`h3`),Ve$1(89,`Disable automatic tooltips`),Q(),W(90,`pre`,30),Pe$1(91,`code`,31),Q(),W(92,`h3`),Ve$1(93,`Use the public API in your application`),Q(),W(94,`pre`,32),Pe$1(95,`code`,33),Q()()}if(e&2){let o=Ya(28);M(14),Y_(`value`,t.text),M(),he(`min`,4)(`max`,64),Y_(`value`,t.width),M(2),Y_(`checked`,t.enabled),M(),Y_(`checked`,t.largeText),M(),Y_(`checked`,t.automaticTooltips),M(),Y_(`checked`,t.customTooltip),M(6),et(`inline-size`,t.previewWidth(),`rem`),ne(`large-text`,t.largeText()),M(),he(`bxTruncate`,t.enabled())(`bxTooltip`,t.customTooltip()?`My application tooltip`:Xa(29,50,t.label(),o.truncated(),t.automaticTooltips())),ye(`tabindex`,t.customTooltip()||t.automaticTooltips()&&o.truncated()?0:null),M(3),tt(t.label()),M(2),xr(`Text `,o.truncated()?`is truncated`:`fits without truncation`,`.`),M(5),et(`inline-size`,t.previewWidth(),`rem`),M(),he(`text`,t.label())(`tooltipOnTruncate`,t.automaticTooltips())(`tooltip`,t.customTooltip()?`My application tooltip`:void 0),M(7),et(`inline-size`,t.previewWidth(),`rem`),M(),he(`label`,t.label())(`tooltipOnTruncate`,t.automaticTooltips()),M(7),et(`inline-size`,t.previewWidth(),`rem`),M(),he(`value`,t.label())(`tooltipOnTruncate`,t.automaticTooltips()),M(7),et(`inline-size`,t.previewWidth(),`rem`),M(),he(`label`,t.label())(`options`,t.options())(`value`,0)(`tooltipOnTruncate`,t.automaticTooltips()),M(7),et(`inline-size`,t.previewWidth(),`rem`),M(),he(`options`,t.options())(`value`,Wk(54,Wn))(`tooltipOnTruncate`,t.automaticTooltips()),M(7),et(`inline-size`,t.previewWidth(),`rem`),M(2),he(`label`,t.label())(`wrapLabel`,!t.enabled())(`tooltipOnTruncate`,t.automaticTooltips()),M(2),xr(`Menu activations: `,t.menuActions()),M(6),he(`highlight`,t.pipeExample),M(4),he(`highlight`,t.customExample),M(4),he(`highlight`,t.logicExample)}},dependencies:[ht,Qn$1,Ti$1,en,Zx,ki$1,kx,Ax,zx,rr,ir,Us],styles:[`
[_nghost-%COMP%] {
  display: block;
  inline-size: 100%;
  min-inline-size: 0;
}
.truncation-demo[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  inline-size: 100%;
  min-inline-size: 0;
}
.truncation-demo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.truncation-demo[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.truncation-demo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
}
.truncation-controls[_ngcontent-%COMP%], 
.truncation-switches[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 0.75rem;
  inline-size: 100%;
}
@media (min-width: 768px) {
  .truncation-controls[_ngcontent-%COMP%], 
   .truncation-switches[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
.text-example[_ngcontent-%COMP%], 
.example-width[_ngcontent-%COMP%] {
  min-inline-size: 0;
  max-inline-size: 100%;
}
.text-example[_ngcontent-%COMP%] {
  padding: 0.5rem;
  box-sizing: border-box;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.25rem;
}
.text-example[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 2px;
}
.large-text[_ngcontent-%COMP%] {
  font-size: 1.5em;
}
.component-examples[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: stretch;
  gap: 1rem;
  inline-size: 100%;
  min-inline-size: 0;
}
@media (min-width: 768px) {
  .component-examples[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
.preview-card[_ngcontent-%COMP%] {
  display: grid;
  grid-template-rows: max-content 12rem 1fr;
  gap: 0.75rem;
  min-inline-size: 0;
  padding: 0.75rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.5rem;
}
.preview-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  line-height: 1.5;
}
.text-preview-card[_ngcontent-%COMP%] {
  grid-column: 1/-1;
}
.preview-stage[_ngcontent-%COMP%] {
  display: grid;
  grid-template-rows: minmax(0, 1fr);
  place-items: safe center start;
  min-inline-size: 0;
  min-block-size: 0;
  overflow: auto;
  padding: 0.5rem;
}
.preview-stage[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: -2px;
  border-radius: 0.25rem;
}
.preview-caption[_ngcontent-%COMP%] {
  min-inline-size: 0;
  min-block-size: 3lh;
  font-size: 0.8125rem;
  line-height: 1.5;
  color: var(--%NS%bx-text-secondary);
  overflow-wrap: anywhere;
}`]})};var Bn=()=>({key:`tagLabel`});var Le=class a{translations=f(z);label=_(`Skopje`);text=y(()=>String(this.label()??``));color=_(`accent`);variant=_(`tonal`);disabled=_(!1);leadingIcon=_(!0);trailingIcon=_(!0);leadingCount=_(!1);trailingCount=_(!0);leftNumber=_(3);rightNumber=_(12);colors=mn;variants=pn;static ɵfac=function(e){return new(e||a)};static ɵcmp=se$1({type:a,selectors:[[`app-tag-examples`]],features:[Ut([z,{provide:qe,useExisting:z}])],decls:23,vars:27,consts:[[1,`tag-demo`],[`aria-label`,`Tag previews`,1,`tag-previews`],[3,`text`,`color`,`variant`,`disabled`,`leadingIcon`,`trailingIcon`,`leadingNumber`,`trailingNumber`,`tooltip`],[`color`,`info`,`variant`,`filled`,`ariaLabel`,`42 locations`,`tooltip`,`Number-only tag`,3,`leadingNumber`],[`leadingIcon`,`map-pin`,`color`,`success`,3,`text`],[`text`,`Unavailable`,`color`,`neutral`,3,`disabled`],[`text`,`Skopje`],[`text`,`+2`,`tooltip`,`Ohrid, Bitola`],[1,`tag-controls`],[`label`,`Tag text`,3,`valueChange`,`value`],[`label`,`Color`,3,`valueChange`,`clearable`,`options`,`value`],[`label`,`Appearance`,3,`valueChange`,`clearable`,`options`,`value`],[`label`,`Leading number`,`type`,`number`,3,`valueChange`,`value`],[`label`,`Trailing number`,`type`,`number`,3,`valueChange`,`value`],[1,`tag-controls-checkboxes`],[`label`,`Leading icon`,3,`checkedChange`,`checked`],[`label`,`Trailing icon`,3,`checkedChange`,`checked`],[`label`,`Leading number`,3,`checkedChange`,`checked`],[`label`,`Trailing number`,3,`checkedChange`,`checked`],[`label`,`Disabled appearance`,3,`checkedChange`,`checked`]],template:function(e,t){e&1&&(W(0,`div`,0)(1,`div`,1),Pe$1(2,`bx-tag`,2)(3,`bx-tag`,3)(4,`bx-tag`,4)(5,`bx-tag`,5)(6,`bx-tag`,6)(7,`bx-tag`,7),Q(),W(8,`div`,8)(9,`bx-input-field`,9),K_(`valueChange`,function(c){return Hk(t.label,c)||(t.label=c),c}),Q(),W(10,`bx-select`,10),K_(`valueChange`,function(c){return Hk(t.color,c)||(t.color=c),c}),Q(),W(11,`bx-select`,11),K_(`valueChange`,function(c){return Hk(t.variant,c)||(t.variant=c),c}),Q(),W(12,`bx-input-field`,12),K_(`valueChange`,function(c){return Hk(t.leftNumber,c)||(t.leftNumber=c),c}),Q(),W(13,`bx-input-field`,13),K_(`valueChange`,function(c){return Hk(t.rightNumber,c)||(t.rightNumber=c),c}),Q()(),W(14,`div`,14)(15,`bx-checkbox`,15),K_(`checkedChange`,function(c){return Hk(t.leadingIcon,c)||(t.leadingIcon=c),c}),Q(),W(16,`bx-checkbox`,16),K_(`checkedChange`,function(c){return Hk(t.trailingIcon,c)||(t.trailingIcon=c),c}),Q(),W(17,`bx-checkbox`,17),K_(`checkedChange`,function(c){return Hk(t.leadingCount,c)||(t.leadingCount=c),c}),Q(),W(18,`bx-checkbox`,18),K_(`checkedChange`,function(c){return Hk(t.trailingCount,c)||(t.trailingCount=c),c}),Q(),W(19,`bx-checkbox`,19),K_(`checkedChange`,function(c){return Hk(t.disabled,c)||(t.disabled=c),c}),Q()(),W(20,`p`),Ve$1(21,`Hover or keyboard-focus a tooltip tag. In a select trigger, the parent control exposes the complete selection while overflow tags show the remaining names on hover.`),Q(),Pe$1(22,`app-truncation-examples`),Q()),e&2&&(M(2),he(`text`,t.text())(`color`,t.color()??`accent`)(`variant`,t.variant()??`tonal`)(`disabled`,t.disabled())(`leadingIcon`,t.leadingIcon()?`map-pin`:void 0)(`trailingIcon`,t.trailingIcon()?`chevron-right`:void 0)(`leadingNumber`,t.leadingCount()?t.leftNumber():null)(`trailingNumber`,t.trailingCount()?t.rightNumber():null)(`tooltip`,`A location tag tooltip`),M(),he(`leadingNumber`,42),M(),he(`text`,Wk(26,Bn)),M(),he(`disabled`,!0),M(4),Y_(`value`,t.label),M(),he(`clearable`,!1)(`options`,t.colors),Y_(`value`,t.color),M(),he(`clearable`,!1)(`options`,t.variants),Y_(`value`,t.variant),M(),Y_(`value`,t.leftNumber),M(),Y_(`value`,t.rightNumber),M(2),Y_(`checked`,t.leadingIcon),M(),Y_(`checked`,t.trailingIcon),M(),Y_(`checked`,t.leadingCount),M(),Y_(`checked`,t.trailingCount),M(),Y_(`checked`,t.disabled))},dependencies:[zx,Qn$1,Ti$1,ki$1,se],styles:[`
[_nghost-%COMP%] {
  display: block;
  inline-size: 100%;
  min-inline-size: 0;
}
.tag-demo[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  inline-size: 100%;
}
.tag-previews[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  min-block-size: 3rem;
}
.tag-controls[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  inline-size: 100%;
}
.tag-controls-checkboxes[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  inline-size: 100%;
}
@media (max-width: 640px) {
  .tag-controls[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr);
  }
  .tag-controls-checkboxes[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}`]})};var He={project:``,email:``,password:``,confirmation:``,teamSize:null,destination:``,categories:[],plan:``,terms:!1,notifications:!1,note:``,budget:50};var Ae=[{label:`Skopje`,value:`skopje`,group:`North Macedonia`},{label:`Ohrid`,value:`ohrid`,group:`North Macedonia`},{label:`Bitola`,value:`bitola`,group:`North Macedonia`},{label:`London`,value:`london`,group:`Europe`},{label:`Paris`,value:`paris`,group:`Europe`},{label:`Berlin`,value:`berlin`,group:`Europe`},{label:`Amsterdam`,value:`amsterdam`,group:`Europe`},{label:`Vienna`,value:`vienna`,group:`Europe`,disabled:!0},{label:`Prague`,value:`prague`,group:`Europe`},{label:`Barcelona`,value:`barcelona`,group:`Europe`},{label:`Copenhagen`,value:`copenhagen`,group:`Europe`},{label:`Stockholm`,value:`stockholm`,group:`Europe`},{label:`Lisbon`,value:`lisbon`,group:`Europe`},{label:`Rome`,value:`rome`,group:`Europe`},{label:`Athens`,value:`athens`,group:`Europe`},{label:`New York`,value:`new-york`,group:`Americas`},{label:`San Francisco`,value:`san-francisco`,group:`Americas`},{label:`Toronto`,value:`toronto`,group:`Americas`},{label:`Vancouver`,value:`vancouver`,group:`Americas`},{label:`Buenos Aires`,value:`buenos-aires`,group:`Americas`},{label:`Tokyo`,value:`tokyo`,group:`Asia`},{label:`Singapore`,value:`singapore`,group:`Asia`},{label:`Seoul`,value:`seoul`,group:`Asia`},{label:`Sydney`,value:`sydney`,group:`Oceania`}];var yn={minLength:({params:a})=>`Use at least ${a.minLength} characters for the project name.`};var xn=[{label:`1 location`,value:1},{label:`3 locations`,value:3},{label:`12 locations`,value:12},{label:`All 24 locations`,value:24}];var hn=[{label:`Remote total`,value:`total`},{label:`Custom text`,value:`custom`},{label:`Loaded selections`,value:`loaded`},{label:`Disabled`,value:`disabled`}];function ie(a,r){return new Promise((e,t)=>{let o=()=>{clearTimeout(c),t(new DOMException(`Request cancelled`,`AbortError`))},c=setTimeout(()=>{r?.removeEventListener(`abort`,o),e()},a);r?.aborted?o():r?.addEventListener(`abort`,o,{once:!0})})}var ce=class a{async options(r,e,t,o,c){if(await ie(800,c),o)throw new Error(`The mock request failed. Retry to load this page.`);let ge=Ae.filter(be=>String(be.label).toLocaleLowerCase().includes(r.toLocaleLowerCase())),Ke=ge.slice(e,e+t);return{items:Ke,hasMore:e+Ke.length<ge.length,total:ge.length,selectableTotal:ge.filter(be=>!be.disabled&&!be.groupDisabled).length}}async available(r,e){return await ie(650,e),![`blocks`,`taken`,`admin`].includes(r.trim().toLocaleLowerCase())}async save(r){return await ie(900),!r.email.includes(`server-error`)}static ɵfac=function(e){return new(e||a)};static ɵprov=N({token:a,factory:a.ɵfac,providedIn:`root`})};var pe=class a{api=f(ce);options=_([]);loading=_(!1);hasMore=_(!0);total=_(void 0);selectableTotal=_(void 0);error=_(void 0);query=_(``);pageSize=_(3);failNext=_(!1);requests=_([]);config=_({buttonMode:`auto`,text:{key:`loadMore`},loadingText:{key:`loading`},retryText:{key:`retry`},variant:`tonal`,color:`accent`});requestId=0;controller;constructor(){f(K).onDestroy(()=>this.controller?.abort()),this.load({source:`button`})}async load(r){if(this.loading()||!this.hasMore()&&!this.error())return;this.controller?.abort();let e=new AbortController,t=++this.requestId,o=this.failNext();this.controller=e,this.failNext.set(!1),this.loading.set(!0),this.error.set(void 0),this.record(`${r.source}: requesting ${this.pageSize()} items at offset ${this.options().length}`);try{let c=await this.api.options(this.query(),this.options().length,this.pageSize(),o,e.signal);if(t!==this.requestId)return;this.options.update(g=>[...g,...c.items]),this.hasMore.set(c.hasMore),this.total.set(c.total),this.selectableTotal.set(c.selectableTotal),this.record(`success: ${c.items.length} items received`)}catch(c){if(t!==this.requestId||e.signal.aborted)return;this.error.set(c instanceof Error?c.message:`Request failed.`),this.record(`failed: items retained; retry is available`)}finally{t===this.requestId&&this.loading.set(!1)}}search(r){this.controller?.abort(),++this.requestId,this.loading.set(!1),this.query.set(r),this.options.set([]),this.total.set(void 0),this.selectableTotal.set(void 0),this.hasMore.set(!0),this.error.set(void 0),this.load({source:`button`})}fail(){this.failNext.set(!0),this.load({source:`button`})}record(r){this.requests.update(e=>[r,...e].slice(0,8))}static ɵfac=function(e){return new(e||a)};static ɵprov=N({token:a,factory:a.ɵfac})};var Rn=()=>({key:`project`});var fn=()=>({key:`allLocations`});var Cn=()=>({key:`locationsSelected`});var wn=()=>({key:`clearSelection`});var Sn=()=>({key:`clearSelectionTooltip`});var Xe=()=>({key:`loading`});var jn=()=>({key:`selectAll`});var qn=(a,r)=>r.value;function Un(a,r){if(a&1&&(W(0,`li`),Ve$1(1),Q()),a&2){let e=r.$implicit;M(),G_(``,e.kind,`: `,e.message||`Uses the field message resolver`)}}function Gn(a,r){if(a&1){let e=hs();W(0,`div`,1)(1,`form`,3)(2,`bx-input-field`,4),J0(),Q(),W(3,`bx-input-field`,5),J0(),Q(),W(4,`div`,6)(5,`bx-input-field`,7),J0(),Q(),W(6,`bx-input-field`,8),J0(),W(7,`bx-error`),Ve$1(8),Q()()(),W(9,`bx-input-field`,9),J0(),W(10,`span`,10),Ve$1(11,`people`),Q()(),W(12,`bx-select`,11),J0(),Q(),W(13,`bx-multi-select`,12),J0(),Q(),W(14,`bx-radio-group`,13),J0(),Pe$1(15,`bx-radio`,14)(16,`bx-radio`,15),Q(),W(17,`bx-checkbox`,16),J0(),Q(),W(18,`bx-slide-toggle`,17),J0(),Q(),W(19,`bx-input-field`,18),J0(),Q(),W(20,`label`,19),Ve$1(21,`Budget`),Q(),W(22,`input`,20),J0(),Q(),W(23,`div`,21)(24,`button`,22),Pe$1(25,`bx-icon`,23),Ve$1(26,`Save project`),Q(),W(27,`button`,24),Ce(`click`,function(){Ur(e);let o=de();return qr(o.validateAll())}),Ve$1(28,`Validate all`),Q(),W(29,`button`,24),Ce(`click`,function(){Ur(e);let o=de();return qr(o.resetForm())}),Ve$1(30,`Reset form`),Q(),W(31,`button`,24),Ce(`click`,function(){Ur(e);let o=de();return qr(o.populate())}),Ve$1(32,`Fill valid data`),Q()(),W(33,`div`,21)(34,`button`,24),Ce(`click`,function(){Ur(e);let o=de();return qr(o.locked.set(!o.locked()))}),Ve$1(35,`Toggle disabled form`),Q(),W(36,`button`,24),Ce(`click`,function(){Ur(e);let o=de();return qr(o.readOnly.set(!o.readOnly()))}),Ve$1(37,`Toggle readonly fields`),Q(),W(38,`button`,24),Ce(`click`,function(){Ur(e);let o=de();return qr(o.policy.set(o.policy()===`touched`?`always`:`touched`))}),Ve$1(39),Q()()(),W(40,`aside`,25)(41,`p`,26),Ve$1(42),Q(),W(43,`dl`)(44,`dt`),Ve$1(45,`Valid`),Q(),W(46,`dd`),Ve$1(47),Q(),W(48,`dt`),Ve$1(49,`Invalid`),Q(),W(50,`dd`),Ve$1(51),Q(),W(52,`dt`),Ve$1(53,`Pending`),Q(),W(54,`dd`),Ve$1(55),Q(),W(56,`dt`),Ve$1(57,`Submitting`),Q(),W(58,`dd`),Ve$1(59),Q(),W(60,`dt`),Ve$1(61,`Touched`),Q(),W(62,`dd`),Ve$1(63),Q(),W(64,`dt`),Ve$1(65,`Dirty`),Q(),W(66,`dd`),Ve$1(67),Q()(),W(68,`pre`,27),Pe$1(69,`code`,28),Za(70,`json`),Q(),W(71,`ul`),Yr(72,Un,2,2,`li`,null,Ga),Q()()()}if(a&2){let e=de();M(),he(`formRoot`,e.registration),M(),he(`label`,Wk(53,Rn))(`formField`,e.registration.project)(`errorMessages`,e.projectMessages)(`errorPolicy`,e.policy()),tN(),M(),he(`formField`,e.registration.email)(`errorPolicy`,e.policy()),tN(),M(2),he(`formField`,e.registration.password)(`errorPolicy`,e.policy()),tN(),M(),he(`formField`,e.registration.confirmation)(`errorPolicy`,e.policy()),tN(),M(2),tt(e.registration.confirmation().errors()[0]?.message||`Please confirm your password.`),M(),he(`formField`,e.registration.teamSize)(`errorPolicy`,e.policy()),tN(),M(3),he(`clearable`,!1)(`readOnly`,e.readOnly())(`options`,e.options)(`isSearchable`,!0)(`formField`,e.registration.destination)(`errorPolicy`,e.policy()),tN(),M(),he(`clearable`,!1)(`readOnly`,e.readOnly())(`isSearchable`,!0)(`allSelectedText`,Wk(54,fn))(`selectedCountText`,Wk(55,Cn))(`options`,e.options)(`formField`,e.registration.categories)(`errorPolicy`,e.policy()),tN(),M(),he(`formField`,e.registration.plan)(`errorPolicy`,e.policy()),tN(),M(3),he(`formField`,e.registration.terms)(`errorPolicy`,e.policy()),tN(),M(),he(`formField`,e.registration.notifications),tN(),M(),he(`multiline`,!0)(`formField`,e.registration.note)(`errorPolicy`,e.policy()),tN(),M(3),he(`discrete`,!0)(`formField`,e.registration.budget),tN(),M(2),he(`disabled`,!e.canSubmit())(`loading`,e.registration().submitting()),M(10),ye(`aria-pressed`,e.locked()),M(2),ye(`aria-pressed`,e.readOnly()),M(3),xr(`Errors: `,e.policy()),M(3),tt(e.status()),M(5),tt(e.registration().valid()),M(4),tt(e.registration().invalid()),M(4),tt(e.registration().pending()),M(4),tt(e.registration().submitting()),M(4),tt(e.registration().touched()),M(4),tt(e.registration().dirty()),M(2),he(`highlight`,Jk(70,51,e.model())),M(3),Kr(e.registration().errorSummary())}}function Hn(a,r){if(a&1){let e=hs();W(0,`div`,29)(1,`bx-select`,39),K_(`valueChange`,function(o){Ur(e);let c=de(2);return Hk(c.destination,o)||(c.destination=o),qr(o)}),Ce(`loadMore`,function(o){Ur(e);let c=de(2);return qr(c.remote.load(o))})(`search`,function(o){Ur(e);let c=de(2);return qr(c.remote.search(o))}),Q(),W(2,`bx-checkbox`,40),K_(`checkedChange`,function(o){Ur(e);let c=de(2);return Hk(c.useTags,o)||(c.useTags=o),qr(o)}),Q(),W(3,`bx-checkbox`,41),K_(`checkedChange`,function(o){Ur(e);let c=de(2);return Hk(c.allowClearing,o)||(c.allowClearing=o),qr(o)}),Q()()}if(a&2){let e=de(2);M(),he(`clearable`,e.allowClearing())(`clearLabel`,Wk(16,wn))(`clearTooltip`,Wk(17,Sn))(`selectionDisplay`,e.useTags()?`tags`:`text`)(`loadingLabel`,e.searchLoadingText()?Wk(18,Xe):void 0)(`searchValue`,e.remote.query())(`options`,e.remote.options())(`isSearchable`,!0)(`externalFiltering`,!0)(`loading`,e.remote.loading())(`hasMore`,e.remote.hasMore())(`loadError`,e.remote.error())(`loadMoreConfig`,e.remote.config()),Y_(`value`,e.destination),M(),Y_(`checked`,e.useTags),M(),Y_(`checked`,e.allowClearing)}}function Xn(a,r){if(a&1){let e=hs();W(0,`div`,29)(1,`bx-multi-select`,42),K_(`valueChange`,function(o){Ur(e);let c=de(2);return Hk(c.selected,o)||(c.selected=o),qr(o)}),Ce(`loadMore`,function(o){Ur(e);let c=de(2);return qr(c.remote.load(o))})(`search`,function(o){Ur(e);let c=de(2);return qr(c.remote.search(o))})(`selectAllIntentChange`,function(o){Ur(e);let c=de(2);return qr(c.recordIntent(o))})(`selectionChange`,function(o){Ur(e);let c=de(2);return qr(c.recordSelection(o))}),Q(),W(2,`bx-checkbox`,43),K_(`checkedChange`,function(o){Ur(e);let c=de(2);return Hk(c.useTags,o)||(c.useTags=o),qr(o)}),Q(),W(3,`bx-checkbox`,41),K_(`checkedChange`,function(o){Ur(e);let c=de(2);return Hk(c.allowClearing,o)||(c.allowClearing=o),qr(o)}),Q()()}if(a&2){let e=de(2);M(),he(`clearable`,e.allowClearing())(`clearLabel`,Wk(23,wn))(`clearTooltip`,Wk(24,Sn))(`selectionDisplay`,e.useTags()?`tags`:`text`)(`visibleTagCount`,e.visibleTagLimit())(`loadingLabel`,e.searchLoadingText()?Wk(25,Xe):void 0)(`searchValue`,e.remote.query())(`summaryThreshold`,e.summaryLimit())(`allSelectedText`,Wk(26,fn))(`selectedCountText`,Wk(27,Cn))(`options`,e.remote.options())(`isSearchable`,!0)(`externalFiltering`,!0)(`loading`,e.remote.loading())(`hasMore`,e.remote.hasMore())(`loadError`,e.remote.error())(`loadMoreConfig`,e.remote.config()),Y_(`value`,e.selected),he(`allSelectedTooltip`,e.allSelectedTooltip())(`selectAllLabel`,Wk(28,jn))(`selectionScope`,e.remote.query()),M(),Y_(`checked`,e.useTags),M(),Y_(`checked`,e.allowClearing)}}function Kn(a,r){if(a&1&&(W(0,`li`),Ve$1(1),Q()),a&2){let e=r.$implicit;M(),tt(e.label)}}function Qn(a,r){a&1&&(W(0,`div`,45),Pe$1(1,`bx-loading-indicator`,46),Q()),a&2&&(M(),he(`size`,16)(`label`,Wk(2,Xe)))}function Zn(a,r){a&1&&(W(0,`p`),Ve$1(1,`No locations match.`),Q())}function Jn(a,r){if(a&1){let e=hs();W(0,`div`,44,0),Ce(`loadMore`,function(o){Ur(e);let c=de(2);return qr(c.remote.load(o))}),W(2,`ul`),Yr(3,Kn,2,1,`li`,null,qn),Q(),me(5,Qn,2,3,`div`,45),me(6,Zn,2,0,`p`),Q()}if(a&2){let e=Ya(1),t=de(2);he(`loadMoreHasMore`,t.remote.hasMore())(`loadMoreLoading`,t.remote.loading())(`loadMoreError`,t.remote.error())(`loadMoreConfig`,t.remote.config())(`loadMoreRevision`,t.remote.options()),M(3),Kr(t.remote.options()),M(2),ge(t.remote.loading()&&!e.actionVisible()?5:-1),M(),ge(!t.remote.loading()&&!t.remote.options().length&&!t.remote.error()?6:-1)}}function Yn(a,r){if(a&1){let e=hs();W(0,`bx-input-field`,51),K_(`valueChange`,function(o){Ur(e);let c=de(3);return Hk(c.allSelectedTooltipText,o)||(c.allSelectedTooltipText=o),qr(o)}),Q()}if(a&2){let e=de(3);Y_(`value`,e.allSelectedTooltipText)}}function $n(a,r){if(a&1){let e=hs();W(0,`bx-select`,47),K_(`valueChange`,function(o){Ur(e);let c=de(2);return Hk(c.allSelectedTooltipMode,o)||(c.allSelectedTooltipMode=o),qr(o)}),Q(),me(1,Yn,1,1,`bx-input-field`,48),W(2,`bx-input-field`,49),Ce(`valueChange`,function(o){Ur(e);let c=de(2);return qr(c.changeVisibleTags(o))}),Q(),W(3,`bx-input-field`,50),Ce(`valueChange`,function(o){Ur(e);let c=de(2);return qr(c.changeSummaryLimit(o))}),Q()}if(a&2){let e=de(2);he(`clearable`,!1)(`options`,e.allSelectedTooltipOptions),Y_(`value`,e.allSelectedTooltipMode),M(),ge(e.allSelectedTooltipMode()===`custom`?1:-1),M(),he(`min`,1)(`value`,e.visibleTagLimit()),M(),he(`min`,2)(`value`,e.summaryLimit())}}function ei(a,r){if(a&1&&(W(0,`li`),Ve$1(1),Q()),a&2){let e=r.$implicit;M(),tt(e)}}function ti(a,r){if(a&1&&(W(0,`output`),Ve$1(1),Q()),a&2){let e=de(2);M(),G_(`Selectable locations: `,e.remote.selectableTotal()??`…`,` of `,e.remote.total()??`…`,` results. Disabled options and groups are excluded.`)}}function ni(a,r){if(a&1&&(W(0,`li`),Ve$1(1),Q()),a&2){let e=r.$implicit;M(),tt(e)}}function ii(a,r){if(a&1&&(W(0,`ul`,38),Yr(1,ni,2,1,`li`,null,Ga),Q()),a&2){let e=de(2);M(),Kr(e.events())}}function ai(a,r){if(a&1){let e=hs();W(0,`div`,2),me(1,Hn,4,19,`div`,29)(2,Xn,4,29,`div`,29)(3,Jn,7,7,`div`,30),W(4,`div`,31)(5,`div`,32)(6,`button`,33),Ce(`click`,function(){Ur(e);let o=de();return qr(o.remote.fail())}),Ve$1(7,`Fail next page now`),Q(),W(8,`button`,34),Ce(`click`,function(){Ur(e);let o=de();return qr(o.remote.search(``))}),Ve$1(9,`Reset pages`),Q()(),W(10,`div`,35),me(11,$n,4,8),W(12,`bx-select`,36),Ce(`selectionChange`,function(o){Ur(e);let c=de();return qr(c.changePageSize(o.value))}),Q()()(),W(13,`p`,26),Ve$1(14),Q(),W(15,`p`),Ve$1(16,`Small pages show the button without a scrollbar. More items enable scrolling. Failure retains existing items and reveals Retry request.`),Q(),W(17,`ul`,37),Yr(18,ei,2,1,`li`,null,Ga),Q(),me(20,ti,2,2,`output`),me(21,ii,3,0,`ul`,38),Q()}if(a&2){let e=de();M(),ge(e.example()===`select`?1:e.example()===`multi-select`?2:3),M(5),he(`disabled`,e.remote.loading()||!e.remote.hasMore()),M(2),he(`disabled`,e.remote.loading()),M(3),ge(e.example()===`multi-select`?11:-1),M(),he(`clearable`,!1)(`options`,e.pageSizes)(`value`,e.remote.pageSize()),M(2),tt(e.remote.loading()?`Loading: the request takes 800ms.`:e.remote.error()?`Failed: use Retry request at the bottom.`:e.remote.hasMore()?`Ready to load more.`:`All pages loaded.`),M(4),Kr(e.remote.requests()),M(2),ge(e.example()===`multi-select`?20:-1),M(),ge(e.example()===`multi-select`?21:-1)}}function oi(a,r){a&1&&Pe$1(0,`bx-progress-bar`,56)}function ri(a,r){if(a&1){let e=hs();W(0,`div`,2)(1,`div`,21),Pe$1(2,`bx-loading-spinner`,52)(3,`bx-loading-spinner`,53)(4,`bx-loading-indicator`,54),Q(),Pe$1(5,`bx-progress-bar`,55),me(6,oi,1,0,`bx-progress-bar`,56),W(7,`div`,21)(8,`button`,57),Ce(`click`,function(){Ur(e);let o=de();return qr(o.runAction())}),Pe$1(9,`bx-icon`,58),Ve$1(10,`Save with icon`),Q(),W(11,`button`,59),Ce(`click`,function(){Ur(e);let o=de();return qr(o.runAction())}),Ve$1(12,`Save without icon`),Q(),W(13,`button`,60),Ce(`click`,function(){Ur(e);let o=de();return qr(o.runAction())}),Pe$1(14,`bx-icon`,23),Q()(),W(15,`p`,26),Ve$1(16),Q()()}if(a&2){let e=de();M(3),he(`size`,32),M(2),he(`value`,e.progress()),M(),ge(e.loadingAction()?6:-1),M(2),he(`loading`,e.loadingAction()),M(3),he(`loading`,e.loadingAction()),M(2),he(`loading`,e.loadingAction()),M(3),tt(e.loadingAction()?`Saving with fake API requests…`:`Ready. Buttons restore their original icons after loading.`)}}function li(a,r){if(a&1){let e=hs();W(0,`div`,2)(1,`bx-range-slider`,61),K_(`valueChange`,function(o){Ur(e);let c=de();return Hk(c.range,o)||(c.range=o),qr(o)}),Q(),W(2,`output`),Ve$1(3),Za(4,`json`),Q()()}if(a&2){let e=de();M(),Y_(`value`,e.range),he(`discrete`,!0)(`showTickMarks`,!0)(`step`,10),M(2),tt(Jk(4,5,e.range()))}}function si(a,r){if(a&1){let e=hs();W(0,`div`,2)(1,`bx-input-field`,62)(2,`span`,63),Ve$1(3,`#`),Q(),W(4,`span`,10),Ve$1(5,`ID`),Q()(),W(6,`bx-form-field`,64)(7,`textarea`,65),J0(),K_(`ngModelChange`,function(o){Ur(e);let c=de();return Hk(c.templateValue,o)||(c.templateValue=o),qr(o)}),Q(),W(8,`bx-hint`),Ve$1(9,`Native controls share the accessible frame.`),Q()(),W(10,`bx-input-field`,66),J0(),Q(),W(11,`output`),Ve$1(12),Q(),W(13,`form`,67),Ce(`ngSubmit`,function(){Ur(e);let o=de();return qr(o.captureSubmit())}),W(14,`bx-input-field`,68),J0(),Q(),W(15,`button`,69),Ve$1(16,`Commit reactive form`),Q(),W(17,`output`),Ve$1(18),Q()(),W(19,`bx-input-field`,70),J0(),K_(`ngModelChange`,function(o){Ur(e);let c=de();return Hk(c.templateValue,o)||(c.templateValue=o),qr(o)}),Q(),W(20,`output`),Ve$1(21),Q()()}if(a&2){let e=de();M(7),Y_(`ngModel`,e.templateValue),tN(),M(3),he(`formControl`,e.blurControl),tN(),M(2),xr(`Reactive model: `,e.blurControl.value),M(),he(`formGroup`,e.submitForm),M(),tN(),M(4),xr(`Submitted: `,e.submitSnapshot()),M(),Y_(`ngModel`,e.templateValue),tN(),M(2),xr(`Template model: `,e.templateValue())}}var Fe=class a{api=f(ce);translations=f(z);remote=f(pe);model=_(s(r({},He),{categories:[]}));locked=_(!1);readOnly=_(!1);policy=_(`touched`);status=_(`Complete the form to submit.`);events=_([]);selected=_([]);destination=_(null);useTags=_(!1);allowClearing=_(!0);allSelectedTooltipMode=_(`total`);allSelectedTooltipText=_(`All matching locations`);allSelectedTooltipOptions=hn;allSelectedTooltip=y(()=>{let r=this.allSelectedTooltipMode();if(r===`custom`)return this.allSelectedTooltipText();if(r!==`loaded`)return r===`disabled`||this.remote.selectableTotal()===void 0?!1:(this.translations.version(),this.translations.translate(`allLocationsTooltip`,{total:this.remote.selectableTotal()}))});visibleTagLimit=_(1);searchLoadingText=_(!1);summaryLimit=_(2);range=_([20,80]);loadingAction=_(!1);progress=_(0);blurControl=new xS(``,{nonNullable:!0,updateOn:`blur`});submitForm=new tf({name:new xS(``,{nonNullable:!0,updateOn:`submit`})});submitSnapshot=_(``);templateValue=_(``);pageSizes=xn;options=Ae;projectMessages=yn;registration=dr(this.model,r=>{qa(r.project,{message:`Enter a project name.`}),Ba(r.project,3),Ka(r.project,{params:({value:e})=>e(),debounce:300,factory:e=>sD({params:e,loader:({params:t,abortSignal:o})=>this.api.available(t,o)}),onSuccess:e=>e?null:{kind:`taken`,message:`That project name is already used. Try another.`},onError:()=>({kind:`availability`,message:`Availability could not be checked.`})}),qa(r.email,{message:`Email is required.`}),za(r.email,{message:`Enter a valid email address.`}),qa(r.password),Ba(r.password,8,{message:`Use at least eight characters.`}),qa(r.confirmation),De(r.confirmation,({value:e,valueOf:t})=>e()===t(r.password)?null:{kind:`mismatch`,message:`Passwords must match.`}),qa(r.teamSize),ja(r.teamSize,1),Ha(r.teamSize,20),qa(r.destination),qa(r.categories),qa(r.plan),qa(r.terms,{message:`Accept the terms to continue.`}),qa(r.note,{when:({valueOf:e})=>e(r.notifications),message:`Add a notification note.`}),Ua(r.note,`blur`),Fa(r,()=>this.locked()),Va(r.email,()=>this.readOnly())},{submission:{ignoreValidators:`none`,action:async r=>await this.api.save(r().value())?(this.status.set(`Saved successfully.`),null):{kind:`server`,message:`The server rejected this email. Edit it and retry.`,fieldTree:r.email},onInvalid:r=>{this.status.set(`Review the validation messages.`),r().errorSummary()[0]?.fieldTree().focusBoundControl()}}});canSubmit=y(()=>this.registration().valid()&&!this.registration().submitting()&&!this.locked());validationStatus=y(()=>this.registration().pending()?`Checking availability`:this.registration().valid()?`Ready to submit`:`Needs attention`);example=g(`signal-forms`);constructor(){Se(()=>{this.status.set(this.validationStatus())})}validateAll(){this.registration().markAsTouched(),this.registration().errorSummary()[0]?.fieldTree().focusBoundControl()}resetForm(){this.registration().reset(s(r({},He),{categories:[]}))}populate(){this.model.set({project:`My workspace`,email:`person@example.com`,password:`long-password`,confirmation:`long-password`,teamSize:3,destination:`skopje`,categories:[`ohrid`],plan:`team`,terms:!0,notifications:!1,note:``,budget:50})}recordIntent(r){this.events.update(e=>[`select-all: ${r.selected}, ${r.reason}, scope=${r.scope||`all`}, loaded=${r.values.length}`,...e].slice(0,8))}recordSelection(r){this.events.update(e=>[`selection: ${r.source}, ${r.value.length} values`,...e].slice(0,8))}changeVisibleTags(r){this.visibleTagLimit.set(Math.max(1,Number(r)||1))}changeSummaryLimit(r){this.summaryLimit.set(Math.max(2,Number(r)||2))}captureSubmit(){this.submitSnapshot.set(this.submitForm.getRawValue().name)}changePageSize(r){this.remote.pageSize.set(r??3),this.remote.search(this.remote.query())}async runAction(){this.loadingAction()||(this.loadingAction.set(!0),this.progress.set(15),await this.api.available(`demo`,new AbortController().signal),this.progress.set(70),await this.api.save(this.model()),this.progress.set(100),this.loadingAction.set(!1))}static ɵfac=function(e){return new(e||a)};static ɵcmp=se$1({type:a,selectors:[[`app-form-examples`]],inputs:{example:[1,`example`]},features:[Ut([pe,z,{provide:qe,useExisting:z}])],decls:5,vars:1,consts:[[`standalonePagination`,`bxLoadMore`],[1,`form-demo-layout`],[1,`async-demo`],[1,`registration-form`,3,`formRoot`],[`hint`,`Try blocks or taken to see the async validator.`,3,`label`,`formField`,`errorMessages`,`errorPolicy`],[`label`,`Email`,`type`,`email`,`hint`,`Use server-error@example.com to simulate a rejected submission.`,3,`formField`,`errorPolicy`],[1,`form-row`],[`label`,`Password`,`type`,`password`,`autocomplete`,`new-password`,3,`formField`,`errorPolicy`],[`label`,`Confirm password`,`type`,`password`,`autocomplete`,`new-password`,3,`formField`,`errorPolicy`],[`label`,`Team size`,`type`,`number`,`hint`,`Between 1 and 20.`,3,`formField`,`errorPolicy`],[`bxSuffix`,``,`aria-hidden`,`true`],[`label`,`Destination`,3,`clearable`,`readOnly`,`options`,`isSearchable`,`formField`,`errorPolicy`],[`label`,`Related locations`,3,`clearable`,`readOnly`,`isSearchable`,`allSelectedText`,`selectedCountText`,`options`,`formField`,`errorPolicy`],[`label`,`Plan`,3,`formField`,`errorPolicy`],[`label`,`Personal`,`value`,`personal`],[`label`,`Team`,`value`,`team`],[`label`,`Accept the terms`,3,`formField`,`errorPolicy`],[`label`,`Enable notifications`,3,`formField`],[`label`,`Notification note`,`hint`,`Required with notifications. Model updates on blur.`,3,`multiline`,`formField`,`errorPolicy`],[`for`,`budget-example`],[`bxSlider`,``,`id`,`budget-example`,`type`,`range`,3,`discrete`,`formField`],[1,`actions`],[`bx-button`,``,`type`,`submit`,`variant`,`filled`,3,`disabled`,`loading`],[`name`,`save`,`size`,`20`],[`bx-button`,``,`type`,`button`,3,`click`],[`aria-label`,`Form state`,1,`state-panel`],[`role`,`status`],[`tabindex`,`0`,`aria-label`,`Current form data as JSON`,1,`playground-code-block`],[`language`,`json`,3,`highlight`],[1,`selection-row`],[`role`,`region`,`aria-label`,`Paginated locations`,`tabindex`,`0`,`bxLoadMore`,``,1,`paged-collection`,3,`loadMoreHasMore`,`loadMoreLoading`,`loadMoreError`,`loadMoreConfig`,`loadMoreRevision`],[1,`actions`,`pagination-actions`],[1,`pagination-buttons`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`danger`,3,`click`,`disabled`],[`bx-button`,``,`type`,`button`,3,`click`,`disabled`],[1,`pagination-options`],[`label`,`Page size`,`subscriptSizing`,`dynamic`,1,`page-size-control`,3,`selectionChange`,`clearable`,`options`,`value`],[`aria-label`,`Request events`,1,`event-log`],[`aria-label`,`Selection events`,1,`event-log`],[`label`,`Location`,`subscriptSizing`,`dynamic`,3,`valueChange`,`loadMore`,`search`,`clearable`,`clearLabel`,`clearTooltip`,`selectionDisplay`,`loadingLabel`,`searchValue`,`options`,`isSearchable`,`externalFiltering`,`loading`,`hasMore`,`loadError`,`loadMoreConfig`,`value`],[`label`,`Show selected tag`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Allow clearing selection`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Locations`,`subscriptSizing`,`dynamic`,3,`valueChange`,`loadMore`,`search`,`selectAllIntentChange`,`selectionChange`,`clearable`,`clearLabel`,`clearTooltip`,`selectionDisplay`,`visibleTagCount`,`loadingLabel`,`searchValue`,`summaryThreshold`,`allSelectedText`,`selectedCountText`,`options`,`isSearchable`,`externalFiltering`,`loading`,`hasMore`,`loadError`,`loadMoreConfig`,`value`,`allSelectedTooltip`,`selectAllLabel`,`selectionScope`],[`label`,`Show selected tags`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`role`,`region`,`aria-label`,`Paginated locations`,`tabindex`,`0`,`bxLoadMore`,``,1,`paged-collection`,3,`loadMore`,`loadMoreHasMore`,`loadMoreLoading`,`loadMoreError`,`loadMoreConfig`,`loadMoreRevision`],[1,`collection-loading`],[3,`size`,`label`],[`label`,`Select-all tooltip`,`subscriptSizing`,`dynamic`,3,`valueChange`,`clearable`,`options`,`value`],[`label`,`Select-all tooltip text`,`subscriptSizing`,`dynamic`,3,`value`],[`label`,`Visible tags`,`type`,`number`,`subscriptSizing`,`dynamic`,1,`visible-tag-control`,3,`valueChange`,`min`,`value`],[`label`,`Summary threshold`,`type`,`number`,`subscriptSizing`,`dynamic`,1,`summary-threshold-control`,3,`valueChange`,`min`,`value`],[`label`,`Select-all tooltip text`,`subscriptSizing`,`dynamic`,3,`valueChange`,`value`],[`label`,`Loading preview`],[`label`,`Larger loading preview`,3,`size`],[`label`,`Fetching workspaces`],[`label`,`Save progress`,3,`value`],[`mode`,`indeterminate`,`label`,`Saving project`],[`bx-button`,``,`type`,`button`,`variant`,`filled`,3,`click`,`loading`],[`name`,`save`,`size`,`24`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`,`loading`],[`bx-button`,``,`type`,`button`,`variant`,`icon`,`aria-label`,`Save project`,3,`click`,`loading`],[`label`,`Budget range`,3,`valueChange`,`value`,`discrete`,`showTickMarks`,`step`],[`label`,`Reference`,`appearance`,`outline`,`hint`,`A visible hint`,`hintEnd`,`Optional`],[`bxPrefix`,``,`aria-hidden`,`true`],[`label`,`Native multiline field`],[`bxInput`,``,`label`,`Native multiline field`,`rows`,`3`,3,`ngModelChange`,`ngModel`],[`label`,`Reactive blur update`,`hint`,`Edit and blur repeatedly; every edit reaches the model.`,3,`formControl`],[3,`ngSubmit`,`formGroup`],[`label`,`Reactive submit update`,`formControlName`,`name`],[`bx-button`,``,`type`,`submit`],[`label`,`Template-driven field`,3,`ngModelChange`,`ngModel`]],template:function(e,t){e&1&&me(0,Gn,74,56,`div`,1)(1,ai,22,10,`div`,2)(2,ri,17,7,`div`,2)(3,li,5,7,`div`,2)(4,si,22,7,`div`,2),e&2&&ge(t.example()===`signal-forms`||t.example()===`radio-group`?0:t.example()===`select`||t.example()===`multi-select`||t.example()===`load-more`?1:t.example()===`loading-spinner`||t.example()===`loading-indicator`||t.example()===`progress-bar`||t.example()===`button-loading`?2:t.example()===`range-slider`?3:4)},dependencies:[ht,KK,YK,aS,$K,GK,jP,Fv,ZK,zP,Vv,GP,$a,Ga$1,If,Kl,Zl,Qn$1,Tf,Ti$1,ut,en,tn,Qe,Ue$1,Ke,rn,ki$1,J,Ye,Ze,Hx,or,Ux,Et,$A],styles:[`
[_nghost-%COMP%] {
  display: block;
  inline-size: 100%;
  min-inline-size: 0;
}
.form-demo-layout[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(12rem, 0.7fr);
  gap: 1.5rem;
  inline-size: 100%;
}
.registration-form[_ngcontent-%COMP%], 
.async-demo[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-inline-size: 0;
  inline-size: 100%;
}
.form-row[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
}
.actions[_ngcontent-%COMP%], 
.pagination-buttons[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
}
.state-panel[_ngcontent-%COMP%] {
  padding: 1rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.5rem;
  background: var(--%NS%bx-bg-surface);
  min-inline-size: 0;
}
.state-panel[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.25rem;
}
.state-panel[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {
  margin: 0;
}
.paged-collection[_ngcontent-%COMP%] {
  max-block-size: 15rem;
  overflow: auto;
  padding: 1rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.5rem;
}
.paged-collection[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
  list-style: none;
  padding: 0;
  margin: 0;
}
.paged-collection[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  padding: 0.5rem;
  border-bottom: 1px solid var(--%NS%bx-border-subtle);
}
.event-log[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  color: var(--%NS%bx-text-secondary);
  overflow-wrap: anywhere;
  padding-inline-start: 1rem;
}
textarea[_ngcontent-%COMP%], 
select[_ngcontent-%COMP%] {
  background: var(--%NS%bx-bg-surface);
  color: var(--%NS%bx-text-primary);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.25rem;
  font: inherit;
  padding: 0.5rem;
}
@media (max-width: 768px) {
  .form-demo-layout[_ngcontent-%COMP%], 
   .form-row[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr);
  }
}
.selection-row[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: center;
  gap: 1rem;
}
.pagination-options[_ngcontent-%COMP%] {
  display: flex;
  flex: 1 1 28rem;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  min-inline-size: 0;
  max-inline-size: 100%;
  margin-inline-start: auto;
}
.pagination-options[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  flex: none;
  max-inline-size: 100%;
}
.pagination-actions[_ngcontent-%COMP%] {
  justify-content: flex-end;
}
.pagination-buttons[_ngcontent-%COMP%] {
  min-inline-size: 0;
  margin-inline-end: auto;
}
.visible-tag-control[_ngcontent-%COMP%] {
  inline-size: 10.5rem;
}
.summary-threshold-control[_ngcontent-%COMP%] {
  inline-size: 12.25rem;
}
.page-size-control[_ngcontent-%COMP%] {
  inline-size: 10rem;
}
@media (max-width: 768px) {
  .selection-row[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr);
  }
}
@media (max-width: 640px) {
  .pagination-options[_ngcontent-%COMP%] {
    inline-size: 100%;
    margin-inline-start: 0;
  }
  .pagination-options[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    inline-size: 100%;
  }
}
.collection-loading[_ngcontent-%COMP%] {
  padding: 0.5rem;
}`]})};var ue=class a{query=_(``);completedQuery=_(``);results=_([]);loading=_(!1);error=_(void 0);requests=_([]);controller;constructor(){f(K).onDestroy(()=>this.controller?.abort()),this.search(``)}async search(r,e$1=!1){this.controller?.abort();let t=new AbortController;this.controller=t,this.query.set(r),this.loading.set(!0),this.error.set(void 0);try{if(await ie(250,t.signal),this.record(`Request: ${r||`(all components)`}`),await ie(800,t.signal),t.signal.aborted)return;if(e$1)throw new Error(`Simulated request failure`);let o=r.trim().toLocaleLowerCase(),c=e.map(g=>g.title).filter(g=>g.toLocaleLowerCase().includes(o));this.results.set(c),this.completedQuery.set(r),this.record(`Success: ${c.length} results`)}catch{if(t.signal.aborted)return;this.error.set({key:`searchError`}),this.record(`Failed: previous results retained; retry the same query`)}finally{this.controller===t&&this.loading.set(!1)}}record(r){this.requests.update(e=>[r,...e].slice(0,8))}static ɵfac=function(e){return new(e||a)};static ɵprov=N({token:a,factory:a.ɵfac})};var ci=()=>({key:`searchLabel`});var di=()=>({key:`searchPlaceholder`});var En=()=>({key:`searchLoading`});var mi=()=>({key:`searchClear`});var pi=()=>({key:`retry`});function ui(a,r){if(a&1&&(W(0,`li`),Ve$1(1),Q()),a&2){let e=r.$implicit;M(),tt(e)}}function gi(a,r){if(a&1&&(W(0,`li`,9),Ve$1(1),Q()),a&2){let e=de(2);M(),tt(e.emptyText())}}function bi(a,r){if(a&1&&me(0,gi,2,1,`li`,9),a&2){let e=de();ge(!e.remote.loading()&&!e.remote.error()?0:-1)}}function _i(a,r){if(a&1&&(W(0,`li`),Ve$1(1),Q()),a&2){let e=r.$implicit;M(),tt(e)}}var ze=class a{i18n=f(z);remote=f(ue);showLoadingText=_(!1);readOnly=_(!1);disabled=_(!1);emptyText=y(()=>(this.i18n.version(),this.i18n.translate(`searchEmpty`)));retryConfig={variant:`tonal`,color:`accent`};changeLoadingText(r){this.showLoadingText.set(r),r&&!this.remote.loading()&&!this.readOnly()&&!this.disabled()&&this.remote.search(this.remote.query())}static ɵfac=function(e){return new(e||a)};static ɵcmp=se$1({type:a,selectors:[[`app-search-examples`]],features:[Ut([ue,z,{provide:qe,useExisting:z}])],decls:20,vars:26,consts:[[1,`search-demo`],[`subscriptSizing`,`dynamic`,3,`search`,`retry`,`label`,`placeholder`,`value`,`loading`,`loadError`,`loadingLabel`,`loadingAriaLabel`,`clearLabel`,`retryLabel`,`retryConfig`,`readOnly`,`disabled`],[1,`search-actions`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`danger`,3,`click`,`disabled`],[`label`,`Show loading text`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Readonly`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Disabled`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`aria-label`,`Search results`,1,`search-results`],[`aria-label`,`Request events`,1,`search-events`],[`role`,`status`]],template:function(e,t){e&1&&(W(0,`div`,0)(1,`bx-search-input`,1),Ce(`search`,function(c){return t.remote.search(c)})(`retry`,function(c){return t.remote.search(c)}),Q(),W(2,`div`,2)(3,`button`,3),Ce(`click`,function(){return t.remote.search(t.remote.query(),!0)}),Ve$1(4,`Fail this search`),Q(),W(5,`bx-checkbox`,4),Ce(`checkedChange`,function(c){return t.changeLoadingText(c)}),Q(),W(6,`bx-checkbox`,5),K_(`checkedChange`,function(c){return Hk(t.readOnly,c)||(t.readOnly=c),c}),Q(),W(7,`bx-checkbox`,6),K_(`checkedChange`,function(c){return Hk(t.disabled,c)||(t.disabled=c),c}),Q()(),W(8,`p`),Ve$1(9,`Requests debounce for 250ms and take 800ms. Type quickly to cancel older requests, or enter an unmatched term for empty results. Failure keeps the last successful results. Use Retry request to try the same query again. Enabling Show loading text previews another request.`),Q(),W(10,`section`,7)(11,`p`),Ve$1(12),Q(),W(13,`ul`),Yr(14,ui,2,1,`li`,null,zu,!1,bi,1,1),Q()(),W(17,`ul`,8),Yr(18,_i,2,1,`li`,null,Ga),Q()()),e&2&&(M(),he(`label`,Wk(20,ci))(`placeholder`,Wk(21,di))(`value`,t.remote.query())(`loading`,t.remote.loading())(`loadError`,t.remote.error())(`loadingLabel`,t.showLoadingText()?Wk(22,En):void 0)(`loadingAriaLabel`,Wk(23,En))(`clearLabel`,Wk(24,mi))(`retryLabel`,Wk(25,pi))(`retryConfig`,t.retryConfig)(`readOnly`,t.readOnly())(`disabled`,t.disabled()),M(2),he(`disabled`,t.remote.loading()||t.disabled()||t.readOnly()),M(2),he(`checked`,t.showLoadingText()),M(),Y_(`checked`,t.readOnly),M(),Y_(`checked`,t.disabled),M(3),ye(`aria-busy`,t.remote.loading()),M(2),G_(`Last completed search: `,t.remote.completedQuery()||`all components`,` · `,t.remote.results().length,` results`),M(2),Kr(t.remote.results()),M(4),Kr(t.remote.requests()))},dependencies:[If,Qn$1,Zx],styles:[`
[_nghost-%COMP%] {
  display: block;
  inline-size: 100%;
  min-inline-size: 0;
}
.search-demo[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
.search-actions[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
}
.search-results[_ngcontent-%COMP%] {
  padding: 0.75rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.5rem;
}
.search-results[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
  columns: 2;
  padding-inline-start: 1rem;
}
.search-events[_ngcontent-%COMP%] {
  padding-inline-start: 1rem;
  font-size: 0.75rem;
  color: var(--%NS%bx-text-secondary);
}
@media (max-width: 640px) {
  .search-results[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
    columns: 1;
  }
}`]})};function yi(a,r){if(a&1&&(W(0,`div`)(1,`strong`),Ve$1(2),Q()()),a&2){let e=de();M(2),tt(e.data.title)}}function xi(a,r){if(a&1){let e=hs();W(0,`div`,4)(1,`button`,5),Ce(`click`,function(){Ur(e);let o=de();return qr(o.close())}),Ve$1(2,`Cancel`),Q(),W(3,`button`,6),Ce(`click`,function(){Ur(e);let o=de();return qr(o.confirm())}),Ve$1(4,`Save changes`),Q()()}}var We=class a extends en$1{name=new xS(`Blocks workspace`,{nonNullable:!0});confirm(){this.modal.close(`confirm`,this.name.value)}static ɵfac=(()=>{let r;return function(t){return(r||(r=En$1(a)))(t||a)}})();static ɵcmp=se$1({type:a,selectors:[[`app-component-dialog`]],features:[Je],decls:6,vars:2,consts:[[4,`appModalHeader`],[1,`dialog-body`],[`label`,`Project name`,3,`formControl`],[`class`,`dialog-actions`,4,`appModalFooter`],[1,`dialog-actions`],[`bx-button`,``,3,`click`],[`bx-button`,``,`variant`,`filled`,3,`click`]],template:function(e,t){e&1&&(T_(0,yi,3,1,`div`,0),W(1,`div`,1)(2,`p`),Ve$1(3),Q(),W(4,`bx-input-field`,2),J0(),Q()(),T_(5,xi,5,0,`div`,3)),e&2&&(M(3),tt(t.data.description),M(),he(`formControl`,t.name),tN())},dependencies:[If,Ti$1,ZK,$K,zP,nn,tn$1],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-width: 0;
}
.dialog-body[_ngcontent-%COMP%] {
  width: 28rem;
  max-width: 100%;
  min-width: 0;
}
p[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  line-height: 1.6;
}
.dialog-actions[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 1rem;
}`]})};var hi=()=>({required:`Enter a project name.`});var vi=()=>({email:`Enter a valid email address.`});var fi=()=>({name:`settings`});var Ci=a=>({text:`Project settings`,icon:a});function wi(a,r){a&1&&(W(0,`div`,13),Pe$1(1,`app-side-nav-examples`),Q())}function Si(a,r){a&1&&(W(0,`div`,13),Pe$1(1,`app-top-nav-examples`),Q())}function Ei(a,r){a&1&&Pe$1(0,`app-tag-examples`)}function ki(a,r){a&1&&Pe$1(0,`app-truncation-examples`)}function Ti(a,r){a&1&&Pe$1(0,`app-form-examples`,24)}function Mi(a,r){a&1&&Pe$1(0,`app-form-examples`,25)}function Di(a,r){a&1&&Pe$1(0,`app-form-examples`,26)}function Ni(a,r){a&1&&Pe$1(0,`app-form-examples`,27)}function Pi(a,r){a&1&&Pe$1(0,`app-form-examples`,28)}function Oi(a,r){a&1&&Pe$1(0,`app-form-examples`,29)}function Vi(a,r){a&1&&Pe$1(0,`app-form-examples`,30)}function Ii(a,r){a&1&&Pe$1(0,`app-form-examples`,31)}function Li(a,r){a&1&&Pe$1(0,`app-form-examples`,32)}function Ai(a,r){a&1&&Pe$1(0,`app-form-examples`,33)}function Fi(a,r){a&1&&Pe$1(0,`app-form-examples`,34)}function zi(a,r){a&1&&Pe$1(0,`app-form-examples`,35)}function Wi(a,r){a&1&&Pe$1(0,`app-form-examples`,36)}function Bi(a,r){if(a&1){let e=hs();W(0,`div`,37)(1,`div`,43)(2,`button`,44),Ce(`click`,function(){Ur(e);let o=de(2);return qr(o.activate(`Primary action`))}),Ve$1(3,`Primary action`),Q(),W(4,`button`,45),Ce(`click`,function(){Ur(e);let o=de(2);return qr(o.activate(`Tonal action`))}),Ve$1(5,`Tonal`),Q(),W(6,`button`,46),Ce(`click`,function(){Ur(e);let o=de(2);return qr(o.activate(`Text action`))}),Ve$1(7,`Text`),Q(),W(8,`button`,47),Ve$1(9,`Disabled`),Q()(),W(10,`div`,43)(11,`button`,48),Ce(`click`,function(){Ur(e);let o=de(2);return qr(o.activate(`Success`))}),Ve$1(12,`Success`),Q(),W(13,`button`,49),Ce(`click`,function(){Ur(e);let o=de(2);return qr(o.activate(`Warning`))}),Ve$1(14,`Warning`),Q(),W(15,`button`,50),Ce(`click`,function(){Ur(e);let o=de(2);return qr(o.activate(`Delete`))}),Ve$1(16,`Delete`),Q(),W(17,`button`,51),Ce(`click`,function(){Ur(e);let o=de(2);return qr(o.activate(`Add item`))}),Pe$1(18,`bx-icon`,52),Q()(),W(19,`div`,43)(20,`button`,53),Ce(`click`,function(){Ur(e);let o=de(2);return qr(o.activate(`Close example`))}),Pe$1(21,`bx-icon`,54),Q(),W(22,`button`,55),Ce(`click`,function(){Ur(e);let o=de(2);return qr(o.activate(`Outlined action`))}),Ve$1(23,`Outlined`),Q(),W(24,`button`,56),Ce(`click`,function(){Ur(e);let o=de(2);return qr(o.activate(`Action without runtime effects`))}),Ve$1(25,`Without runtime effects`),Q()()()}a&2&&(M(8),he(`disabled`,!0),M(14),he(`outlined`,!0),M(2),he(`surfaceEffects`,!1))}function Ri(a,r){if(a&1&&(W(0,`div`,37)(1,`bx-checkbox`,57),J0(),Q(),W(2,`bx-checkbox`,58),J0(),Q(),W(3,`div`,43),Pe$1(4,`bx-checkbox-indicator`,59),W(5,`span`),Ve$1(6),Q()(),W(7,`div`,43),Pe$1(8,`bx-checkbox-indicator`),W(9,`span`),Ve$1(10,`Unchecked`),Q(),Pe$1(11,`bx-checkbox-indicator`,60),W(12,`span`),Ve$1(13,`Checked`),Q(),Pe$1(14,`bx-checkbox-indicator`,61),W(15,`span`),Ve$1(16,`Partial`),Q()()()),a&2){let e=de(2);M(),he(`formControl`,e.checked),tN(),M(),he(`formControl`,e.secondChecked),tN(),M(2),he(`checked`,e.checked.value)(`indeterminate`,e.secondChecked.value),M(2),xr(`Selection: `,e.secondChecked.value?`partial`:e.checked.value?`checked`:`unchecked`),M(5),he(`checked`,!0),M(3),he(`indeterminate`,!0)}}function ji(a,r){if(a&1&&(W(0,`div`,37)(1,`bx-checkbox`,62),J0(),Q(),W(2,`bx-checkbox`,63),J0(),Q(),W(3,`bx-checkbox`,64),J0(),Q(),W(4,`output`),Ve$1(5),Q()()),a&2){let e=de(2);M(),he(`formControl`,e.checked),tN(),M(),he(`formControl`,e.secondChecked),tN(),M(),he(`formControl`,e.disabledCheck),tN(),M(2),G_(`Updates: `,e.checked.value?`on`:`off`,` · Previews: `,e.secondChecked.value?`on`:`off`)}}function qi(a,r){if(a&1){let e=hs();W(0,`div`,38)(1,`bx-form-field`,65)(2,`span`,66)(3,`input`,67),Ce(`input`,function(o){Ur(e);let c=de(2);return qr(c.updateField(o))})(`blur`,function(){Ur(e);let o=de(2);return qr(o.showError.set(!0))}),Q()()(),W(4,`button`,68),Ce(`click`,function(){Ur(e);let o=de(2);return qr(o.showError.set(!0))}),Ve$1(5,`Validate name`),Q(),W(6,`output`),Ve$1(7),Q()()}if(a&2){let e=de(2);M(),he(`required`,!0)(`error`,e.fieldError()),M(2),he(`value`,e.fieldValue()),ye(`aria-invalid`,!!e.fieldError()),M(4),xr(`Value: `,e.fieldValue()||`empty`)}}function Ui(a,r){if(a&1&&(W(0,`div`,38)(1,`bx-input-field`,69),J0(),Q(),W(2,`bx-input-field`,70),J0(),Q(),W(3,`bx-input-field`,71),J0(),Q(),W(4,`output`),Ve$1(5),Q()()),a&2){let e=de(2);M(),he(`errorMessages`,Wk(9,hi))(`formControl`,e.name),tN(),M(),he(`errorMessages`,Wk(10,vi))(`formControl`,e.email),tN(),M(),he(`min`,1)(`max`,20)(`formControl`,e.quantity),tN(),M(2),G_(``,e.name.value,` · `,e.quantity.value,` members`)}}function Gi(a,r){if(a&1){let e=hs();W(0,`fieldset`,37)(1,`legend`),Ve$1(2,`Notification frequency`),Q(),W(3,`bx-radio`,72),J0(),Q(),W(4,`bx-radio`,73),J0(),Q(),W(5,`bx-radio`,74),J0(),Q(),W(6,`output`),Ve$1(7),Q(),W(8,`button`,46),Ce(`click`,function(){Ur(e);let o=de(2);return qr(o.frequency.reset())}),Ve$1(9,`Reset frequency`),Q()()}if(a&2){let e=de(2);M(3),he(`formControl`,e.frequency),tN(),M(),he(`formControl`,e.frequency),tN(),M(),he(`formControl`,e.frequency),tN(),M(2),xr(`Selected: `,e.frequency.value)}}function Hi(a,r){a&1&&Pe$1(0,`app-search-examples`)}function Xi(a,r){a&1&&Pe$1(0,`app-form-examples`,39)}function Ki(a,r){if(a&1){let e=hs();W(0,`div`,38)(1,`label`,75),Ve$1(2,`Volume`),Q(),W(3,`input`,76),J0(),Q(),W(4,`output`),Ve$1(5),Q(),W(6,`button`,46),Ce(`click`,function(){Ur(e);let o=de(2);return qr(o.volume.setValue(50))}),Ve$1(7,`Reset volume`),Q(),W(8,`label`,77),Ve$1(9,`Unavailable range`),Q(),Pe$1(10,`input`,78),Q()}if(a&2){let e=de(2);M(3),he(`formControl`,e.volume),tN(),M(2),xr(``,e.volume.value,`%`)}}function Qi(a,r){if(a&1&&(W(0,`div`,37)(1,`bx-slide-toggle`,79),J0(),Q(),W(2,`bx-slide-toggle`,64),J0(),Q(),W(3,`output`),Ve$1(4),Q()()),a&2){let e=de(2);M(),he(`formControl`,e.enabled),tN(),M(),he(`formControl`,e.disabledCheck),tN(),M(2),xr(`Notifications are `,e.enabled.value?`enabled`:`disabled`,`.`)}}function Zi(a,r){if(a&1&&(W(0,`bx-error`,82),Ve$1(1),Q()),a&2){let e=de(3);M(),tt(e.fieldError())}}function Ji(a,r){if(a&1){let e=hs();W(0,`div`,38)(1,`bx-form-field`,80)(2,`span`,66)(3,`input`,81),Ce(`input`,function(o){Ur(e);let c=de(2);return qr(c.updateField(o))})(`blur`,function(){Ur(e);let o=de(2);return qr(o.showError.set(!0))}),Q()(),me(4,Zi,2,1,`bx-error`,82),Q(),W(5,`button`,68),Ce(`click`,function(){Ur(e);let o=de(2);return qr(o.showError.set(!0))}),Ve$1(6,`Validate reference`),Q()()}if(a&2){let e=de(2);M(3),he(`value`,e.fieldValue()),ye(`aria-invalid`,!!e.fieldError())(`aria-describedby`,e.fieldError()?`custom-error`:null),M(),ge(e.fieldError()?4:-1)}}function Yi(a,r){if(a&1&&(W(0,`p`),Ve$1(1,`Keep related information together while showing one panel at a time.`),Q(),W(2,`bx-input-field`,89),J0(),Q()),a&2){let e=de(3);M(2),he(`formControl`,e.tabNote),tN()}}function $i(a,r){a&1&&(W(0,`p`),Ve$1(1,`Headers support arrow keys, Home and End. Panel content is created only when selected.`),Q())}function ea(a,r){a&1&&(W(0,`bx-tab`,87)(1,`p`),Ve$1(2,`No recent project activity.`),Q()())}function ta(a,r){if(a&1){let e=hs();W(0,`div`,37)(1,`bx-tabs`,83),K_(`selectedValueChange`,function(o){Ur(e);let c=de(2);return Hk(c.selectedTab,o)||(c.selectedTab=o),qr(o)}),W(2,`bx-tab`,84),T_(3,Yi,3,1,`ng-template`,85),Q(),W(4,`bx-tab`,86),T_(5,$i,2,0,`ng-template`,85),Q(),me(6,ea,3,0,`bx-tab`,87),Pe$1(7,`bx-tab`,88),Q(),W(8,`div`,43)(9,`button`,68),Ce(`click`,function(){Ur(e);let o=de(2);return qr(o.tabsVariant.set(o.tabsVariant()===`segmented`?`underline`:`segmented`))}),Ve$1(10,`Underline appearance`),Q(),W(11,`button`,68),Ce(`click`,function(){Ur(e);let o=de(2);return qr(o.detailsDisabled.set(!o.detailsDisabled()))}),Ve$1(12,`Disable details`),Q(),W(13,`button`,68),Ce(`click`,function(){Ur(e);let o=de(2);return qr(o.showActivity.set(!o.showActivity()))}),Ve$1(14,`Show activity`),Q()(),W(15,`output`),Ve$1(16),Q()()}if(a&2){let e=de(2);M(),he(`variant`,e.tabsVariant()),Y_(`selectedValue`,e.selectedTab),M(3),he(`disabled`,e.detailsDisabled()),M(2),ge(e.showActivity()?6:-1),M(),he(`disabled`,!0),M(2),ye(`aria-pressed`,e.tabsVariant()===`underline`),M(2),ye(`aria-pressed`,e.detailsDisabled()),M(2),ye(`aria-pressed`,e.showActivity()),M(3),xr(`Selected: `,e.selectedTab())}}function na(a,r){if(a&1){let e=hs();W(0,`bx-menu`,40)(1,`bx-menu-item`,90),Ce(`action`,function(){Ur(e);let o=de(2);return qr(o.activate(`Project duplicated`))}),Q(),W(2,`bx-menu-item`,91),Ce(`action`,function(){Ur(e);let o=de(2);return qr(o.activate(`Project archived`))}),Q(),Pe$1(3,`bx-menu-item`,92),Q()}a&2&&(M(3),he(`disabled`,!0))}function ia(a,r){if(a&1){let e=hs();W(0,`bx-menu`,40)(1,`bx-menu-item`,93),Ce(`action`,function(){Ur(e);let o=de(2);return qr(o.activate(`Copy link`))}),Q(),W(2,`bx-menu-item`,94),Ce(`action`,function(){Ur(e);let o=de(2);return qr(o.activate(`Open settings`))}),Q(),W(3,`bx-menu-item`,95),Ce(`action`,function(){Ur(e);let o=de(2);return qr(o.activate(`Delete requested`))}),Q(),Pe$1(4,`bx-menu-item`,92),Q()}a&2&&(M(3),he(`danger`,!0),M(),he(`disabled`,!0))}function aa(a,r){a&1&&(W(0,`div`,37),Pe$1(1,`bx-tooltip`,96),W(2,`p`),Ve$1(3,`Standalone tooltip content. Use the trigger directive for positioned help.`),Q(),W(4,`a`,97),Ve$1(5,`Try the tooltip trigger`),Q()())}function oa(a,r){if(a&1){let e=hs();W(0,`div`,37)(1,`div`,43)(2,`button`,98),Ce(`click`,function(){Ur(e);let o=de(2);return qr(o.activate(`Saved`))}),Ve$1(3,`Save project`),Q(),W(4,`button`,99),Ce(`click`,function(){Ur(e);let o=de(2);return qr(o.activate(`Normal tap activated`))}),Ve$1(5,`Hold for a hint`),Q(),W(6,`button`,100),Pe$1(7,`bx-icon`,101),Q()(),W(8,`p`),Ve$1(9,`Hover with a mouse or use keyboard focus for hints. On touch screens, Save project activates immediately, Hold for a hint supports a long press, and the information button opens help on tap.`),Q()()}}function ra(a,r){if(a&1){let e=hs();W(0,`bx-menu`)(1,`bx-menu-item`,104),Ce(`action`,function(){Ur(e),de();let o=Ya(2);return de(2).activate(`Project duplicated`),qr(o.close())}),Q(),W(2,`bx-menu-item`,105),Ce(`action`,function(){Ur(e),de();let o=Ya(2);return de(2).activate(`Project archived`),qr(o.close())}),Q(),W(3,`bx-menu-item`,106),Ce(`action`,function(){Ur(e),de();let o=Ya(2);return de(2).activate(`Delete requested`),qr(o.close())}),Q()()}a&2&&(M(3),he(`danger`,!0))}function la(a,r){if(a&1&&(W(0,`div`,37)(1,`button`,102,0),Ve$1(3,`Project actions `),Pe$1(4,`bx-icon`,103),Q(),T_(5,ra,4,1,`ng-template`,null,1,eg),W(7,`output`),Ve$1(8),Q(),W(9,`p`),Ve$1(10,`Open, close, or reopen while the menu fades. Its contents keep their full size throughout.`),Q()()),a&2){let e=Ya(2),t=Ya(6);M(),he(`bxDropdown`,t),M(7),xr(`Transition: `,e.state())}}function sa(a,r){if(a&1){let e=hs();W(0,`bx-menu`)(1,`bx-menu-item`,108),Ce(`action`,function(){Ur(e);let o=de(3);return qr(o.activate(`Selection copied`))}),Q(),W(2,`bx-menu-item`,109),Ce(`action`,function(){Ur(e);let o=de(3);return qr(o.activate(`Selection archived`))}),Q()()}}function ca(a,r){if(a&1){let e=hs();W(0,`div`,37)(1,`div`,107),Ve$1(2,`Right-click, touch and hold, or focus here and press Shift + F10.`),Q(),W(3,`button`,68),Ce(`click`,function(o){Ur(e);let c=de(2);return qr(c.openContextMenu(o))}),Ve$1(4,`Open actions`),Q(),T_(5,sa,3,0,`ng-template`,null,2,eg),Q()}if(a&2){let e=Ya(6);M(),he(`bxContextMenu`,e)}}function da(a,r){a&1&&(W(0,`div`,37),Pe$1(1,`bx-breadcrumbs`,110),W(2,`p`),Ve$1(3,`This trail comes from the current route metadata. Select Components to navigate back.`),Q(),W(4,`a`,111),Ve$1(5,`Navigate to Button`),Q()()),a&2&&(M(),he(`minimumBreadcrumbs`,1))}function ma(a,r){a&1&&(W(0,`div`,37)(1,`div`,112),Pe$1(2,`bx-icon`,113)(3,`bx-icon`,114)(4,`bx-icon`,115)(5,`bx-icon`,116)(6,`bx-icon`,117),Q(),W(7,`a`,118),Ve$1(8,`Browse the searchable icon catalog`),Q()()),a&2&&(M(2),he(`decorative`,!1))}function pa(a,r){if(a&1){let e=hs();W(0,`bx-modal-banner`,121),Ce(`close`,function(){Ur(e);let o=de(3);return o.bannerVisible.set(!1),qr(o.activate(`Banner dismissed`))}),Q()}a&2&&he(`header`,Yk(3,Ci,Wk(2,fi)))(`showCloseButton`,!0)}function ua(a,r){if(a&1){let e=hs();W(0,`button`,68),Ce(`click`,function(){Ur(e);let o=de(3);return qr(o.bannerVisible.set(!0))}),Ve$1(1,`Restore banner`),Q()}}function ga(a,r){if(a&1){let e=hs();W(0,`div`,41),me(1,pa,1,5,`bx-modal-banner`,119)(2,ua,2,0,`button`,120),W(3,`button`,44),Ce(`click`,function(){Ur(e);let o=de(2);return qr(o.openModal())}),Ve$1(4,`See banner in a dialog`),Q()()}if(a&2){let e=de(2);M(),ge(e.bannerVisible()?1:2)}}function ba(a,r){if(a&1){let e=hs();W(0,`div`,37)(1,`div`,43)(2,`button`,48),Ce(`click`,function(){Ur(e);let o=de(2);return qr(o.notify(`success`))}),Ve$1(3,`Success`),Q(),W(4,`button`,122),Ce(`click`,function(){Ur(e);let o=de(2);return qr(o.notify(`info`))}),Ve$1(5,`Information`),Q(),W(6,`button`,49),Ce(`click`,function(){Ur(e);let o=de(2);return qr(o.notify(`warn`))}),Ve$1(7,`Warning`),Q(),W(8,`button`,50),Ce(`click`,function(){Ur(e);let o=de(2);return qr(o.notify(`danger`))}),Ve$1(9,`Error`),Q()(),W(10,`p`),Ve$1(11,`The toast host manages the progress indicator, dismiss action, pause and cleanup.`),Q(),W(12,`a`,123),Ve$1(13,`Open the full toast configurator`),Q()()}}function _a(a,r){if(a&1){let e=hs();W(0,`div`,37)(1,`div`,43)(2,`button`,48),Ce(`click`,function(){Ur(e);let o=de(2);return qr(o.notify(`success`))}),Ve$1(3,`Show success`),Q(),W(4,`button`,122),Ce(`click`,function(){Ur(e);let o=de(2);return qr(o.notify(`info`))}),Ve$1(5,`Show information`),Q(),W(6,`button`,49),Ce(`click`,function(){Ur(e);let o=de(2);return qr(o.notify(`warn`))}),Ve$1(7,`Show warning`),Q(),W(8,`button`,50),Ce(`click`,function(){Ur(e);let o=de(2);return qr(o.notify(`danger`))}),Ve$1(9,`Show error`),Q()(),W(10,`p`),Ve$1(11,`Semantic colors remain tied to the active Blocks palette.`),Q()()}}function ya(a,r){if(a&1){let e=hs();W(0,`section`,42),Pe$1(1,`bx-icon`,124),W(2,`h3`),Ve$1(3,`A custom Blocks surface`),Q(),W(4,`p`),Ve$1(5,`Material, blur, tint, lighting and motion follow the same global configuration as the controls around it.`),Q(),W(6,`button`,68),Ce(`click`,function(){Ur(e);let o=de(2);return qr(o.activate(`Custom surface action`))}),Ve$1(7,`Try an action`),Q()()}}function xa(a,r){if(a&1){let e=hs();W(0,`button`,68),Ce(`click`,function(){Ur(e);let o=de(3);return qr(o.openModal(`left`))}),Ve$1(1,`Open on the left`),Q()}}function ha(a,r){if(a&1){let e=hs();W(0,`div`,37)(1,`div`,43)(2,`button`,44),Ce(`click`,function(){Ur(e);let o=de(2);return qr(o.openModal())}),Ve$1(3),Q(),me(4,xa,2,0,`button`,120),Q(),W(5,`p`),Ve$1(6,`Try editing, saving, pressing Escape, and dismissing through the backdrop. This is the actual service-created component.`),Q(),W(7,`a`,125),Ve$1(8,`Open the full modal configurator`),Q()()}if(a&2){let e=de(2);M(3),xr(`Open `,e.entry().title.toLowerCase()),M(),ge(e.entry().id===`modal-side`?4:-1)}}function va(a,r){if(a&1&&(W(0,`div`,14),me(1,Ei,1,0,`app-tag-examples`)(2,ki,1,0,`app-truncation-examples`)(3,Ti,1,0,`app-form-examples`,24)(4,Mi,1,0,`app-form-examples`,25)(5,Di,1,0,`app-form-examples`,26)(6,Ni,1,0,`app-form-examples`,27)(7,Pi,1,0,`app-form-examples`,28)(8,Oi,1,0,`app-form-examples`,29)(9,Vi,1,0,`app-form-examples`,30)(10,Ii,1,0,`app-form-examples`,31)(11,Li,1,0,`app-form-examples`,32)(12,Ai,1,0,`app-form-examples`,33)(13,Fi,1,0,`app-form-examples`,34)(14,zi,1,0,`app-form-examples`,35)(15,Wi,1,0,`app-form-examples`,36)(16,Bi,26,3,`div`,37)(17,Ri,17,7,`div`,37)(18,ji,6,5,`div`,37)(19,qi,8,5,`div`,38)(20,Ui,6,11,`div`,38)(21,Gi,10,4,`fieldset`,37)(22,Hi,1,0,`app-search-examples`)(23,Xi,1,0,`app-form-examples`,39)(24,Ki,11,2,`div`,38)(25,Qi,5,3,`div`,37)(26,Ji,7,4,`div`,38)(27,ta,17,9,`div`,37)(28,na,4,1,`bx-menu`,40)(29,ia,5,2,`bx-menu`,40)(30,aa,6,0,`div`,37)(31,oa,10,0,`div`,37)(32,la,11,2,`div`,37)(33,ca,7,1,`div`,37)(34,da,6,1,`div`,37)(35,ma,9,1,`div`,37)(36,ga,5,1,`div`,41)(37,ba,14,0,`div`,37)(38,_a,12,0,`div`,37)(39,ya,8,0,`section`,42)(40,ha,9,2,`div`,37),Q()),a&2){let e,t=de();M(),ge((e=t.entry().id)===`tag`?1:e===`truncate`?2:e===`signal-forms`?3:e===`radio-group`?4:e===`multi-select`?5:e===`load-more`?6:e===`loading-spinner`?7:e===`loading-indicator`?8:e===`progress-bar`?9:e===`button-loading`?10:e===`range-slider`?11:e===`hint`?12:e===`prefix`?13:e===`suffix`?14:e===`native-control`?15:e===`button`?16:e===`checkbox-indicator`?17:e===`checkbox`?18:e===`form-field`?19:e===`input-field`?20:e===`radio`?21:e===`search-input`?22:e===`select`?23:e===`slider`?24:e===`slide-toggle`?25:e===`error`?26:e===`tabs`?27:e===`menu`?28:e===`menu-item`?29:e===`tooltip`?30:e===`tooltip-directive`?31:e===`dropdown`?32:e===`context-menu`?33:e===`breadcrumbs`?34:e===`icon`?35:e===`modal-banner`?36:e===`toast-core`?37:e===`simple-toast`?38:e===`surface`?39:40)}}var kn=class a{route=f(Zn$1);routeData=cY(this.route.data,{initialValue:this.route.snapshot.data});modals=f(fe);toasts=f(ft$1);entry=y(()=>e.find(r=>r.id===this.routeData().componentId)??e[0]);count=_(0);status=_(`Ready to try.`);fieldValue=_(``);showError=_(!1);fieldError=y(()=>this.showError()&&this.fieldValue().trim().length<3?`Enter at least three characters.`:void 0);name=new xS(`Blocks workspace`,{nonNullable:!0,validators:Tr.required});email=new xS(``,{nonNullable:!0,validators:Tr.email});volume=new xS(50,{nonNullable:!0});quantity=new xS(3,{nonNullable:!0});checked=new xS(!0,{nonNullable:!0});secondChecked=new xS(!1,{nonNullable:!0});disabledCheck=new xS({value:!1,disabled:!0},{nonNullable:!0});frequency=new xS(`weekly`,{nonNullable:!0});destination=new xS(`skopje`,{nonNullable:!0});enabled=new xS(!0,{nonNullable:!0});bannerVisible=_(!0);selectedTab=_(`overview`);tabsVariant=_(`segmented`);detailsDisabled=_(!1);showActivity=_(!0);tabNote=new xS(``,{nonNullable:!0});options=[{label:`Skopje`,value:`skopje`},{label:`Ohrid`,value:`ohrid`},{label:`Bitola`,value:`bitola`},{label:`Unavailable destination`,value:`unavailable`,disabled:!0}];contextMenu;activate(r){this.count.update(e=>e+1),this.status.set(`${r} \xB7 action ${this.count()}`)}updateField(r){this.fieldValue.set(r.target.value)}openContextMenu(r){r.preventDefault();let e=r.currentTarget.getBoundingClientRect();this.contextMenu?.open(new MouseEvent(`contextmenu`,{clientX:e.left+16,clientY:e.bottom+4}))}openModal(r){let e=r??(this.entry().id===`modal-side`?`right`:this.entry().id===`modal-bottom-sheet`?`bottom-sheet`:`center`);this.modals.open(We,{data:{title:this.entry().title,description:`Edit the project name. The header, content, footer, backdrop and close behavior use the existing Blocks modal composition.`},header:{text:this.entry().title},style:{layout:e,hasBackdrop:!0,animate:!0,showCloseButton:!0}}).afterClosed().subscribe(o=>this.status.set(o.state===`confirm`?`Saved: ${o.data}`:`Dialog dismissed.`))}notify(r){let e={title:r===`success`?`Settings saved`:r===`warn`?`Review needed`:r===`danger`?`Action failed`:`Workspace update`,message:`This notification follows the application theme and appearance settings.`,durationInMs:4500};switch(r){case`success`:this.toasts.queueSuccess(e);break;case`info`:this.toasts.queueInfo(e);break;case`warn`:this.toasts.queueWarning(e);break;case`danger`:this.toasts.queueDanger(e)}this.status.set(`${r} notification queued.`)}static ɵfac=function(e){return new(e||a)};static ɵcmp=se$1({type:a,selectors:[[`app-component-demo`]],viewQuery:function(e,t){if(e&1&&Km(Ef,5),e&2){let o;Zm(o=Xm())&&(t.contextMenu=o.first)}},decls:35,vars:9,consts:[[`dropdown`,`bxDropdown`],[`dropdownActions`,``],[`contextActions`,``],[1,`component-page`],[1,`component-header`],[`routerLink`,`/components`,1,`back-link`],[1,`eyebrow`],[1,`description`],[1,`component-meta`],[`routerLink`,`/appearance`],[`aria-labelledby`,`preview-heading`,1,`demo-section`],[1,`section-heading`],[`id`,`preview-heading`],[1,`demo-stage`],[`bxSurface`,``,1,`demo-stage`],[`role`,`status`,`aria-live`,`polite`,1,`action-status`],[`aria-labelledby`,`usage-heading`,1,`usage-section`],[`id`,`usage-heading`],[`tabindex`,`0`,`aria-label`,`TypeScript import example`,1,`playground-code-block`],[`language`,`typescript`,3,`highlight`],[`tabindex`,`0`,`aria-label`,`HTML usage example`,1,`playground-code-block`],[`language`,`xml`,3,`highlight`],[`aria-label`,`Component documentation`,1,`documentation-section`],[3,`path`],[`example`,`signal-forms`],[`example`,`radio-group`],[`example`,`multi-select`],[`example`,`load-more`],[`example`,`loading-spinner`],[`example`,`loading-indicator`],[`example`,`progress-bar`],[`example`,`button-loading`],[`example`,`range-slider`],[`example`,`hint`],[`example`,`prefix`],[`example`,`suffix`],[`example`,`native-control`],[1,`demo-stack`],[1,`demo-stack`,`control-width`],[`example`,`select`],[1,`menu-preview`],[1,`demo-stack`,`banner-preview`],[`bxSurface`,``,1,`custom-surface`],[1,`demo-row`],[`bx-button`,``,`variant`,`filled`,3,`click`],[`bx-button`,``,`variant`,`tonal`,`color`,`accent`,3,`click`],[`bx-button`,``,3,`click`],[`bx-button`,``,`variant`,`filled`,3,`disabled`],[`bx-button`,``,`variant`,`tonal`,`color`,`success`,3,`click`],[`bx-button`,``,`variant`,`tonal`,`color`,`warn`,3,`click`],[`bx-button`,``,`variant`,`tonal`,`color`,`danger`,3,`click`],[`bx-button`,``,`variant`,`fab`,`aria-label`,`Add item`,3,`click`],[`name`,`plus`],[`bx-button`,``,`variant`,`icon`,`color`,`grayscale`,`aria-label`,`Close example`,3,`click`],[`name`,`x`,`size`,`20`],[`bx-button`,``,`variant`,`tonal`,3,`click`,`outlined`],[`bx-button`,``,`variant`,`tonal`,3,`click`,`surfaceEffects`],[`label`,`Checked state`,3,`formControl`],[`label`,`Partial state`,3,`formControl`],[3,`checked`,`indeterminate`],[3,`checked`],[3,`indeterminate`],[`label`,`Receive product updates`,3,`formControl`],[`label`,`Include preview features`,3,`formControl`],[`label`,`Unavailable setting`,3,`formControl`],[`label`,`Project name`,`forId`,`field-preview`,3,`required`,`error`],[`bxSurface`,``,1,`native-control-surface`],[`id`,`field-preview`,1,`native-control`,3,`input`,`blur`,`value`],[`bx-button`,``,`variant`,`tonal`,3,`click`],[`label`,`Project name`,3,`errorMessages`,`formControl`],[`label`,`Email address`,`type`,`email`,3,`errorMessages`,`formControl`],[`label`,`Team members`,`type`,`number`,3,`min`,`max`,`formControl`],[`label`,`Daily summary`,`name`,`frequency-demo`,`value`,`daily`,3,`formControl`],[`label`,`Weekly summary`,`name`,`frequency-demo`,`value`,`weekly`,3,`formControl`],[`label`,`Only important updates`,`name`,`frequency-demo`,`value`,`important`,3,`formControl`],[`for`,`volume-demo`],[`bxSlider`,``,`id`,`volume-demo`,`type`,`range`,`min`,`0`,`max`,`100`,3,`formControl`],[`for`,`disabled-volume`],[`bxSlider`,``,`id`,`disabled-volume`,`type`,`range`,`value`,`30`,`disabled`,``],[`label`,`Enable notifications`,3,`formControl`],[`label`,`Reference`,`forId`,`error-preview`],[`id`,`error-preview`,1,`native-control`,3,`input`,`blur`,`value`],[`id`,`custom-error`],[`ariaLabel`,`Project information`,3,`selectedValueChange`,`variant`,`selectedValue`],[`label`,`Overview`,`value`,`overview`,`icon`,`book-open`],[`bxTabContent`,``],[`label`,`Details`,`value`,`details`,`color`,`accent`,`icon`,`badge-check`,`endIcon`,`chevron-right`,3,`disabled`],[`label`,`Activity`,`value`,`activity`,`color`,`info`,`textColor`,`text-warn`,`highlightColor`,`text-warn`,`contentColor`,`text-info`,`icon`,`activity`],[`label`,`Unavailable`,`value`,`unavailable`,3,`disabled`],[`label`,`Project note`,3,`formControl`],[`label`,`Duplicate project`,`icon`,`copy`,3,`action`],[`label`,`Archive project`,`icon`,`archive`,3,`action`],[`label`,`Unavailable action`,3,`disabled`],[`label`,`Copy link`,`icon`,`link`,3,`action`],[`label`,`Open settings`,`icon`,`settings`,`endIcon`,`chevron-right`,3,`action`],[`label`,`Delete project`,`icon`,`trash-2`,3,`action`,`danger`],[`text`,`Your changes are saved automatically.`],[`routerLink`,`/components/tooltip-directive`],[`bx-button`,``,`variant`,`tonal`,`bxTooltip`,`Saves the current project`,`placement`,`top`,3,`click`],[`bx-button`,``,`variant`,`tonal`,`bxTooltip`,`An optional hint revealed by touching and holding`,`bxTooltipTouch`,`longpress`,`placement`,`top`,1,`tooltip-hold-target`,3,`click`],[`bx-button`,``,`variant`,`icon`,`aria-label`,`More information`,`bxTooltip`,`Appearance settings apply to all components`,`bxTooltipTouch`,`tap`,`placement`,`bottom`],[`name`,`info`],[`bx-button`,``,`variant`,`filled`,`bxTransition`,`fade`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`20`],[`label`,`Duplicate`,`icon`,`copy`,3,`action`],[`label`,`Archive`,`icon`,`archive`,3,`action`],[`label`,`Delete`,`icon`,`trash-2`,3,`action`,`danger`],[`tabindex`,`0`,1,`context-target`,3,`bxContextMenu`],[`label`,`Copy selection`,`icon`,`copy`,3,`action`],[`label`,`Archive selection`,`icon`,`archive`,3,`action`],[3,`minimumBreadcrumbs`],[`routerLink`,`/components/button`],[1,`demo-row`,`icon-row`],[`name`,`sparkles`,`size`,`32`,`color`,`text-accent`,`ariaLabel`,`Highlights`,3,`decorative`],[`name`,`check-circle`,`size`,`32`,`color`,`text-success`],[`name`,`info`,`size`,`32`,`color`,`text-info`,`bgColor`,`auto`],[`name`,`triangle-alert`,`size`,`32`,`color`,`text-warn`],[`name`,`heart`,`size`,`40`,`color`,`text-danger`],[`routerLink`,`/icon-catalog`],[3,`header`,`showCloseButton`],[`bx-button`,``,`variant`,`tonal`],[3,`close`,`header`,`showCloseButton`],[`bx-button`,``,`variant`,`tonal`,`color`,`info`,3,`click`],[`routerLink`,`/toastr`],[`name`,`layers`,`size`,`28`],[`routerLink`,`/modal`]],template:function(e,t){e&1&&(W(0,`article`,3)(1,`header`,4)(2,`a`,5),Ve$1(3,`All components`),Q(),W(4,`p`,6),Ve$1(5),Q(),W(6,`h1`),Ve$1(7),Q(),W(8,`p`,7),Ve$1(9),Q(),W(10,`div`,8)(11,`code`),Ve$1(12),Q(),W(13,`a`,9),Ve$1(14,`Configure appearance globally`),Q()()(),W(15,`section`,10)(16,`div`,11)(17,`h2`,12),Ve$1(18,`Interactive example`),Q(),W(19,`span`),Ve$1(20,`Uses your active palette`),Q()(),me(21,wi,2,0,`div`,13)(22,Si,2,0,`div`,13)(23,va,41,1,`div`,14),W(24,`p`,15),Ve$1(25),Q()(),W(26,`section`,16)(27,`h2`,17),Ve$1(28,`Quick usage`),Q(),W(29,`pre`,18),Pe$1(30,`code`,19),Q(),W(31,`pre`,20),Pe$1(32,`code`,21),Q()(),W(33,`section`,22),Pe$1(34,`app-readme`,23),Q()()),e&2&&(M(5),tt(t.entry().group),M(2),tt(t.entry().title),M(2),tt(t.entry().description),M(3),tt(t.entry().selector),M(9),ge(t.entry().id===`side-nav`?21:t.entry().id===`top-nav`?22:23),M(4),tt(t.status()),M(5),he(`highlight`,`import { `+t.entry().symbol+` } from '`+t.entry().package+`';`),M(2),he(`highlight`,t.entry().example),M(2),he(`path`,t.entry().readme))},dependencies:[ht,kE,Fe,ze,Le,Ie,Ve,se,ZK,aS,UP,$K,zP,If,Qn$1,We$1,Tf,Ti$1,Ue$1,J,Ye,Kl,kx,Ax,Df,Bx,Ef,rr,Vx,Wl,$l,mt,Et,vn,V,w],styles:[`
[_nghost-%COMP%] {
  display: block;
}
.component-page[_ngcontent-%COMP%] {
  max-width: 70rem;
  margin: 0 auto;
  padding: 2rem;
  color: var(--%NS%bx-text-primary);
}
.component-header[_ngcontent-%COMP%] {
  margin-bottom: 2rem;
}
.back-link[_ngcontent-%COMP%] {
  display: inline-flex;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
}
.eyebrow[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
  margin: 0 0 0.5rem;
}
h1[_ngcontent-%COMP%] {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  margin: 0 0 0.75rem;
  line-height: 1.2;
}
h2[_ngcontent-%COMP%] {
  font-size: 1.125rem;
  margin: 0;
}
h3[_ngcontent-%COMP%] {
  margin: 0;
}
.description[_ngcontent-%COMP%] {
  max-width: 48rem;
  color: var(--%NS%bx-text-secondary);
  line-height: 1.65;
  margin: 0 0 1rem;
}
.component-meta[_ngcontent-%COMP%], 
.demo-row[_ngcontent-%COMP%], 
.section-heading[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
}
.component-meta[_ngcontent-%COMP%] {
  font-size: 0.875rem;
}
code[_ngcontent-%COMP%] {
  font-family:
    ui-monospace,
    SFMono-Regular,
    monospace;
}
.demo-section[_ngcontent-%COMP%], 
.usage-section[_ngcontent-%COMP%] {
  margin-bottom: 2rem;
}
.section-heading[_ngcontent-%COMP%] {
  justify-content: space-between;
  margin-bottom: 1rem;
}
.section-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 0.8125rem;
}
.demo-stage[_ngcontent-%COMP%] {
  padding: 2rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.75rem;
  background:
    linear-gradient(
      135deg,
      var(--%NS%bx-bg-surface),
      var(--%NS%bx-bg-surface-alt));
  min-height: 12rem;
  display: flex;
  align-items: center;
}
.demo-stack[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  max-width: 100%;
  min-width: 0;
}
.control-width[_ngcontent-%COMP%] {
  width: min(100%, 26rem);
}
.control-width[_ngcontent-%COMP%]    > bx-input-field[_ngcontent-%COMP%], 
.control-width[_ngcontent-%COMP%]    > bx-select[_ngcontent-%COMP%], 
.control-width[_ngcontent-%COMP%]    > bx-search-input[_ngcontent-%COMP%], 
.control-width[_ngcontent-%COMP%]    > bx-form-field[_ngcontent-%COMP%] {
  width: 100%;
}
fieldset[_ngcontent-%COMP%] {
  border: 0;
  padding: 0;
  margin: 0;
}
legend[_ngcontent-%COMP%] {
  margin-bottom: 1rem;
  font-weight: 600;
}
output[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
}
.native-control[_ngcontent-%COMP%] {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.5rem;
  background: var(--%NS%bx-bg-surface);
  color: var(--%NS%bx-text-primary);
  padding: 0.75rem;
  font: inherit;
}
.native-control[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 2px;
}
.menu-preview[_ngcontent-%COMP%] {
  min-width: 15rem;
}
.context-target[_ngcontent-%COMP%] {
  padding: 2rem;
  border: 1px dashed var(--%NS%bx-border-default);
  border-radius: 0.75rem;
}
.context-target[_ngcontent-%COMP%], 
.tooltip-hold-target[_ngcontent-%COMP%] {
  -webkit-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
}
.banner-preview[_ngcontent-%COMP%] {
  width: 100%;
}
.banner-preview[_ngcontent-%COMP%]    > bx-modal-banner[_ngcontent-%COMP%] {
  width: 100%;
}
.custom-surface[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 0.75rem;
  max-width: 28rem;
}
.demo-stage[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
  line-height: 1.6;
  color: var(--%NS%bx-text-secondary);
}
.action-status[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
  min-height: 1.5em;
  margin: 0.75rem 0 0;
}
.usage-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  margin-bottom: 1rem;
}
.search-results[_ngcontent-%COMP%] {
  margin: 0;
  padding-left: 1.25rem;
  line-height: 1.8;
}
a[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-brand);
  text-underline-offset: 3px;
}
@media (max-width: 640px) {
  .component-page[_ngcontent-%COMP%] {
    padding: 1rem;
  }
  .demo-stage[_ngcontent-%COMP%] {
    padding: 1rem;
  }
  .component-meta[_ngcontent-%COMP%] {
    align-items: flex-start;
    flex-direction: column;
  }
}
.native-control-surface[_ngcontent-%COMP%] {
  display: block;
  width: 100%;
}
.native-control-surface[_ngcontent-%COMP%]   .native-control[_ngcontent-%COMP%] {
  background: transparent;
  border: 0;
}
.native-control-surface[_ngcontent-%COMP%]    > .native-control[_ngcontent-%COMP%] {
  border: 0;
  outline: none;
}`]})};export{kn as ComponentDemo};