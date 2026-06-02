import { projects } from "@/data/projects";
import ProjectDetailView from "@/components/projects/ProjectDetailView";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props { params: { id: string } }

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.id === params.id);
  return { title: project?.name ?? "Project" };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return notFound();

  return <ProjectDetailView project={project} />;
}