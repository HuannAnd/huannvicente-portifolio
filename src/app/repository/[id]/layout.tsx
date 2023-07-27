import dynamic from "next/dynamic"

const ProjectsProvider = dynamic(
  () => import("@/contexts/ProjectsProvider"),
  { ssr: true }
)

interface RepositoryLayoutProps {
  children: React.ReactNode
}


export default function RepositoryLayout({ children }: RepositoryLayoutProps) {
  return (
    <ProjectsProvider>
      {children}
    </ProjectsProvider>
  )
}