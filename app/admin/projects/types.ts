export interface Project {
  id: string;
  name: string;
  technologies: string[];
  teamSize: number;
  description: string;
  role: string;
  image?: string;
  productLink?: string;
  gitLink: string;
  createdAt: string;
}

export interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
  defaultImage: string;
}

export interface ProjectFormProps {
  visible: boolean;
  onCancel: () => void;
  onSubmit: (values: any) => void;
  editingProject: Project | null;
  form: any;
  fileList: any[];
  setFileList: (files: any[]) => void;
}

export interface ProjectStatsProps {
  projects: Project[];
}
