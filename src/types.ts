export interface CompatibilityItem {
  icon: string;
  title: string;
  url?: string;
}


export interface FeatureItem {
  description: string;
  icon: string;
  title: string;
}

export interface FooterLink {
  description: string;
  icon: string;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
}

export interface Cla {
  name: string;
  agrupamento: string;
  description: string | null;
  image: string | null;
  instagram: string | null;
  facebook: string | null;
  email: string | null;
  coordinates: { 
    latitude: number;
    longitude: number;
  } | null;
}

export interface EpMember {
  name: string;
  agrupamento: string;
  image: ImageMetadata | string;
}

export interface Departamento {
  name: string;
  members: EpMember[];
}

export interface EP {
  forum: Departamento;
  logistica: Departamento;
  communication: Departamento;
  animation: Departamento;
  coordination: Departamento;
  observadores: Departamento;
  embaixador: Departamento | null;
}

export interface Ciclo {
  number: string;
  year: string;
  ep: EP;
  lema: string;
  image: ImageMetadata | string;
  carta: string;
  instagram: string | null;
  picturesLink: string | null;
  hino: string | null;
  leftSidePictures: string[] | null;
  rightSidePictures: string[] | null;
  scale: number | null;
  translateY: number | null;
}

export const DEPARTMENT_GRADIENTS: Record<string, string> = {
  forum: "bg-gradient-to-t from-[#48cae4] to-rose-200",
  logistica: "bg-gradient-to-t from-[#fdd85d] to-rose-200",
  communication: "bg-gradient-to-t from-[#cdb4db] to-rose-200",
  animation: "bg-gradient-to-t from-[#b7e4c7] to-rose-200",
  coordination: "bg-gradient-to-t from-[#d91e48] to-rose-200",
  observadores: "bg-gradient-to-t from-[#fdf0d5] to-rose-200",
  embaixador: "bg-gradient-to-t from-[#3cf6da] to-rose-200",
};