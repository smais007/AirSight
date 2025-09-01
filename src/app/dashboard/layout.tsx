import BackdropGradient from "@/components/global/backdrop-gradient";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto">
      <BackdropGradient
        className="w-1/2 h-2/6 opacity-40"
        container=" items-center"
      >
        {children}
      </BackdropGradient>
    </div>
  );
};

export default LandingPageLayout;
