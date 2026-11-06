// src/constants/theme.js

export const THEME = {
  colors: {
    bgApp: 'bg-slate-950',
    bgSurface: 'bg-slate-900/80',
    borderLight: 'border-slate-800',
    borderPurple: 'border-purple-500/30',
    textPrimary: 'text-white',
    textSecondary: 'text-slate-300',
    textMuted: 'text-slate-400',
    textAccent: 'text-purple-400',
  },
  gradients: {
    brandText: 'bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-400 bg-clip-text text-transparent',
    primaryBtn: 'bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500',
    glowBorder: 'bg-gradient-to-tr from-purple-500 via-indigo-500 to-fuchsia-400',
  }
};

export const CONTACT_SECTION_STYLES = {
  section: "py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 w-full",
  cardContainer: "max-w-4xl mx-auto rounded-3xl bg-slate-900/90 border border-purple-500/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden w-full",
  wrapper: "space-y-8 relative z-10 w-full",
  grid: "grid grid-cols-1 sm:grid-cols-3 gap-4 w-full",
  channelCard: "p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-purple-500/50 flex flex-col items-center justify-center text-center space-y-2 group transition-all",
  icon: "w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform",
  title: "text-xs font-semibold text-white",
  subtitle: "text-[11px] text-slate-400"
};

export const FOOTER_STYLES = {
  container: "py-8 px-6 border-t border-slate-900 bg-slate-950 text-center text-xs text-slate-500 relative z-10 w-full",
  wrapper: "max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 w-full px-4 sm:px-6 lg:px-8",
  textTech: "flex items-center gap-1.5 text-slate-400",
  reactSpan: "text-purple-400 font-semibold",
  tailwindSpan: "text-indigo-400 font-semibold"
};

export const NAVBAR_STYLES = {
  navScrolled: "fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full bg-slate-950/90 backdrop-blur-md border-b border-purple-900/30 py-4 shadow-xl",
  navDefault: "fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full bg-transparent py-6",
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full",
  logoWrapper: "flex items-center gap-2 group",
  logoBox: "w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-900/50 group-hover:scale-105 transition-transform",
  logoText: "font-bold text-lg tracking-tight text-white group-hover:text-purple-300 transition-colors",
  logoAccent: "text-purple-400",
  linksWrapper: "hidden md:flex items-center gap-8 text-sm font-medium text-slate-300",
  linkItem: "hover:text-purple-400 transition-colors",
  socialsWrapper: "flex items-center gap-3",
  socialIconBtn: "p-2.5 rounded-xl bg-slate-900/80 border border-purple-900/40 text-slate-300 hover:text-white hover:border-purple-500/50 transition-all"
};

export const BADGE_STYLES = {
  container: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wide",
  icon: "w-3.5 h-3.5 text-purple-400"
};

export const BUTTON_STYLES = {
  base: "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 rounded-xl",
  variants: {
    primary: "bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white shadow-xl shadow-purple-950/60 hover:shadow-purple-700/40 hover:scale-[1.02]",
    secondary: "bg-slate-900/80 border border-purple-500/30 text-purple-200 hover:bg-purple-950/40 hover:border-purple-500/60",
    outline: "bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700",
    ghost: "text-slate-400 hover:text-white hover:bg-purple-500/10"
  },
  sizes: {
    sm: "px-3.5 py-2 text-xs",
    md: "px-5 py-2.5 text-xs font-semibold",
    lg: "px-6 py-3.5 text-sm"
  },
  icon: "w-4 h-4 shrink-0"
};

export const CARD_STYLES = {
  base: "rounded-2xl bg-slate-900/70 border border-slate-800 p-6",
  hoverEffect: "hover:border-purple-500/50 transition-all duration-300"
};

export const GLOW_FRAME_STYLES = {
  container: "relative group w-full max-w-sm sm:max-w-md mx-auto", // Aumentado para max-w-md
  glow: "absolute inset-0 bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-indigo-600 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity",
  borderWrapper: "relative p-2 rounded-3xl bg-gradient-to-tr from-purple-500 via-indigo-500 to-fuchsia-400 shadow-2xl",
  innerBox: "w-full aspect-square rounded-[22px] overflow-hidden bg-slate-900 relative flex items-center justify-center"
};

export const IMAGE_TEXT_VIEW_STYLES = {
  container: "relative w-full h-full flex flex-col items-center justify-center p-8",
  bgGradient: "absolute inset-0 bg-gradient-to-b from-purple-950/40 via-slate-900 to-indigo-950/80 pointer-events-none",
  contentWrapper: "relative z-10 flex flex-col items-center justify-center space-y-4 text-center w-full",
  image: "w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-purple-300/40 shadow-2xl", // Foto bem grande (até 192px)
  fallbackAvatar: "w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-xl border-4 border-purple-300/40 text-4xl font-extrabold",
  title: "text-2xl font-bold text-white tracking-wide", // Nome maior
  subtitle: "text-sm text-purple-300 font-mono mt-1",
  badge: "absolute bottom-5 px-4 py-1.5 rounded-full bg-slate-950/90 border border-purple-500/40 text-xs text-emerald-400 flex items-center gap-2 shadow-lg",
  badgeDot: "w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"
};

export const PROJECT_MODAL_STYLES = {
  overlay: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn",
  modalContainer: "relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-950/50 flex flex-col",
  header: "flex items-center justify-between p-6 border-b border-purple-900/40 bg-slate-900/90 sticky top-0 z-10",
  headerIconBox: "p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20",
  closeBtn: "p-2 text-slate-400 hover:text-white rounded-lg hover:bg-purple-500/10 transition-colors",
  body: "p-6 space-y-6",
  previewBox: "w-full h-64 md:h-80 rounded-xl overflow-hidden border border-purple-500/20 bg-slate-950 relative group flex flex-col justify-between p-6",
  previewGradient: "absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-950 to-indigo-950/40 pointer-events-none",
  previewTopBar: "relative z-10 flex items-center justify-between pb-3 border-b border-purple-900/50 text-xs text-purple-300/80",
  previewCenter: "relative z-10 my-auto text-center space-y-3",
  previewIconBox: "inline-flex items-center justify-center p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-300",
  previewBottomBar: "relative z-10 pt-3 border-t border-purple-900/40 flex items-center justify-between text-xs text-slate-400",
  tabsWrapper: "flex border-b border-purple-900/40 gap-4",
  architectureBox: "p-4 rounded-xl bg-slate-950 border border-purple-900/40 font-mono text-xs text-purple-300 space-y-2",
  featureCard: "flex items-start gap-2 text-xs text-slate-300 p-2.5 rounded-lg bg-slate-800/50 border border-slate-800",
  footer: "flex items-center justify-between p-6 border-t border-purple-900/40 bg-slate-900/90 mt-auto"
};

export const SECTION_HEADING_STYLES = {
  alignLeft: "text-left space-y-3",
  alignCenter: "text-center max-w-2xl mx-auto space-y-3",
  subtitle: "text-xs font-semibold uppercase tracking-widest text-purple-400",
  title: "text-3xl font-bold text-white",
  description: "text-sm text-slate-400"
};

export const ABOUT_SECTION_STYLES = {
  section: "py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-900 w-full",
  container: "max-w-7xl mx-auto space-y-12 w-full",
  grid: "grid grid-cols-1 md:grid-cols-3 gap-6 w-full",
  iconBox: (bgColor, borderColor, iconColor) => `w-12 h-12 rounded-xl ${bgColor} border ${borderColor} flex items-center justify-center ${iconColor}`,
  title: "text-lg font-bold text-white",
  description: "text-xs text-slate-300 leading-relaxed"
};

export const HERO_SECTION_STYLES = {
  section: "relative min-h-screen w-full flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-purple-900/20",
  parallaxBg: "absolute inset-0 pointer-events-none transition-transform duration-75 ease-out w-full",
  blobOne: "absolute -top-30 -left-20 w-[600px] h-[600px] bg-purple-600/35 rounded-full blur-[130px]",
  blobTwo: "absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-indigo-600/25 rounded-full blur-[120px]",
  blobThree: "absolute bottom-0 left-10 w-[550px] h-[550px] bg-fuchsia-600/20 rounded-full blur-[130px]",
  container: "max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10",
  leftCol: "lg:col-span-7 space-y-6 text-left",
  title: "text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight",
  gradientText: "bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-400 bg-clip-text text-transparent",
  description: "text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl leading-relaxed",
  actionsWrapper: "pt-2 flex flex-wrap gap-4 items-center",
  rightCol: "lg:col-span-5 flex justify-center w-full",
  cardInner: "w-full h-72 sm:h-80 relative flex items-center justify-center p-6 text-center",
  avatarBox: "w-28 h-28 mx-auto rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-xl border-2 border-purple-300/40 text-3xl font-extrabold",
  avatarTitle: "text-lg font-bold text-white",
  avatarSubtitle: "text-xs text-purple-300 font-mono mt-1"
};

export const PROJECTS_SECTION_STYLES = {
  section: "py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-900 w-full",
  container: "max-w-7xl mx-auto space-y-12 w-full",
  headerWrapper: "flex flex-col md:flex-row md:items-end justify-between gap-6",
  filterContainer: "flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-900 border border-slate-800",
  filterBtnActive: "px-4 py-2 rounded-lg text-xs font-medium transition-all bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-950/50",
  filterBtnInactive: "px-4 py-2 rounded-lg text-xs font-medium transition-all text-slate-400 hover:text-white hover:bg-purple-950/30",
  grid: "grid grid-cols-1 md:grid-cols-2 gap-8 w-full",
  card: "group relative rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-purple-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between",
  cardContent: "p-6 space-y-4",
  badgeCategory: "px-3 py-1 rounded-full bg-slate-800 text-purple-300 text-xs font-mono font-medium border border-slate-700",
  cardTitle: "text-xl font-bold text-white group-hover:text-purple-300 transition-colors",
  cardDescription: "text-xs text-slate-300 leading-relaxed",
  tagItem: "px-2.5 py-1 rounded-md bg-purple-950/40 text-purple-300 text-[11px] font-mono border border-purple-900/40",
  cardFooter: "p-6 flex items-center justify-between gap-3 border-t border-slate-800 mt-4",
  githubBtn: "p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all border border-slate-700 flex items-center justify-center"
};

export const SKILLS_SECTION_STYLES = {
  section: "py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-900 w-full",
  container: "max-w-7xl mx-auto space-y-12 w-full",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full",
  cardHeader: "flex items-center justify-between",
  iconSpan: "text-2xl",
  levelBadge: "px-2.5 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-[10px] font-semibold",
  skillTitle: "text-base font-bold text-white",
  skillDesc: "text-xs text-slate-400"
};

export const APP_STYLES = {
  root: "min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-purple-500 selection:text-white relative overflow-x-hidden",
  main: "relative z-10"
};