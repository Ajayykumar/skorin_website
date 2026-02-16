import { cn } from "@/lib/utils";

type LogoItem = {
  name: string;
  category: string;
  color: string;
};

type LogoCloudProps = {
  className?: string;
  logos?: LogoItem[];
};

export function LogoCloud({ className, logos }: LogoCloudProps) {
  const items: LogoItem[] =
    logos ??
    [
      { name: "Microsoft", category: "Enterprise", color: "from-blue-600 to-blue-400" },
      { name: "Amazon", category: "E-commerce", color: "from-orange-500 to-yellow-500" },
      { name: "Google", category: "Tech", color: "from-red-500 to-blue-500" },
      { name: "Apple", category: "Technology", color: "from-gray-800 to-gray-600" },
      { name: "Meta", category: "Social", color: "from-blue-600 to-purple-600" },
      { name: "Tesla", category: "Automotive", color: "from-red-600 to-gray-800" },
      { name: "Netflix", category: "Entertainment", color: "from-red-600 to-red-800" },
      { name: "Spotify", category: "Music", color: "from-green-500 to-green-700" },
    ];

  return (
    <div className={cn("w-full", className)}>
      {/* Main Logos Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {items.map((item, index) => (
          <div
            key={item.name}
            className="group relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-[#0B3C5D]/[.08] bg-white/80 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:shadow-lg hover:scale-105 dark:border-white/[.12] dark:bg-black/20">
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
              
              {/* Logo Content */}
              <div className="relative z-10">
                <div className="flex flex-col items-center text-center">
                  {/* Logo Placeholder */}
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.color} p-0.5 mb-3`}>
                    <div className="h-full w-full rounded-xl bg-white/90 dark:bg-black/80 flex items-center justify-center">
                      <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300">
                        {item.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Company Name */}
                  <div className="font-bold text-zinc-900 dark:text-white text-sm">
                    {item.name}
                  </div>
                  
                  {/* Category */}
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    {item.category}
                  </div>
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1F77B4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Trust Indicators */}
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
          <span>ISO 27001 Certified</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
          <div className="h-2 w-2 rounded-full bg-blue-500"></div>
          <span>SOC 2 Compliant</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
          <div className="h-2 w-2 rounded-full bg-purple-500"></div>
          <span>GDPR Ready</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
          <div className="h-2 w-2 rounded-full bg-orange-500"></div>
          <span>Enterprise Grade</span>
        </div>
      </div>

      {/* Stats Row */}
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-[#1F77B4] dark:text-[#17A2B8]">500+</div>
          <div className="text-xs text-zinc-600 dark:text-zinc-400">Enterprise Clients</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-[#17A2B8] dark:text-[#1F77B4]">15+</div>
          <div className="text-xs text-zinc-600 dark:text-zinc-400">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-[#0B3C5D] dark:text-white">99.9%</div>
          <div className="text-xs text-zinc-600 dark:text-zinc-400">Uptime SLA</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-[#1F77B4] dark:text-[#17A2B8]">24/7</div>
          <div className="text-xs text-zinc-600 dark:text-zinc-400">Global Support</div>
        </div>
      </div>
    </div>
  );
}
