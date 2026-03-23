export const ProjetosStyles = {
  section: "relative bg-gray-900 w-full overflow-hidden",
 
  glow: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none",
 
  container: "relative z-10 py-16 px-4 mx-auto max-w-screen-xl lg:py-24 lg:px-6",
 
  // Cabeçalho
  headerWrapper: "text-center mb-16",
 
  titulo: "text-4xl font-extrabold text-white mb-4",
 
  tituloDestaque: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400",
 
  divider: "w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mt-4",
 
  // Grid
  grid: "grid gap-6 lg:grid-cols-2",
 
  // Card
  card: "group relative flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10",
 
  // Imagem do projeto
  imagemWrapper: "relative w-full h-48 overflow-hidden",
 
  imagem: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
 
  imagemOverlay: "absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent",
 
  // Conteúdo do card
  cardBody: "flex flex-col flex-1 p-6",
 
  cardTitulo: "mb-2 text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300",
 
  cardDescricao: "mb-6 text-sm font-light text-gray-400 leading-relaxed flex-1",
 
  // Rodapé do card
  cardFooter: "flex justify-between items-center pt-4 border-t border-white/10",
 
  autorWrapper: "flex items-center gap-3",
 
  autorAvatar: "w-7 h-7 rounded-full ring-1 ring-white/20",
 
  autorNome: "text-sm font-medium text-gray-300",
 
  // Link "Ver projeto"
  link: "inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-cyan-400 transition-colors duration-200",
 
  linkIcone: "w-4 h-4 transition-transform duration-200 group-hover:translate-x-1",
};
 