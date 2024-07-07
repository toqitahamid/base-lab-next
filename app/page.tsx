import ResearchSection from "@/components/ResearchSection";
import TeamSection from "@/components/TeamSection";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-4xl font-bold">Computer Vision and Deep Learning Lab</CardTitle>
          <CardDescription className="text-lg mt-2">
            Advancing the frontiers of AI through innovative research and applications.
          </CardDescription>
        </CardHeader>
      </Card>
      
      <CardContent>
        <ResearchSection />
        <TeamSection />
      </CardContent>

      <footer className="mt-8 text-center text-sm text-muted-foreground">
        © 2023 Computer Vision and Deep Learning Lab
      </footer>
    </main>
  );
}