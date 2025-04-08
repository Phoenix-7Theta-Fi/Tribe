export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="relative">
        {/* Background decorative element */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-magenta/10 rounded-full blur-3xl" />
        
        {/* Main content */}
        <div className="relative bg-white/50 backdrop-blur-sm rounded-2xl p-12 text-center">
          <span className="inline-block text-cyan text-lg mb-2">
            ⚡ Welcome back to
          </span>
          
          <h1 className="text-6xl font-bold text-amber-medium mb-6 tracking-tight">
            Tribe
          </h1>
          
          <div className="max-w-md mx-auto space-y-4">
            <p className="text-amber-dark text-lg">
              Your creative journey continues here
            </p>
            
            <div className="h-px w-24 mx-auto bg-gradient-to-r from-cyan via-magenta to-amber-medium opacity-30" />
            
            <p className="text-magenta font-medium">
              Let&apos;s build something amazing today
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}








