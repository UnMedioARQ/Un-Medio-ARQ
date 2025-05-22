// Project data
export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  imageUrl: string;
  description?: string;
  client?: string;
  area?: string;
  stage?: string;
  purpose?: string;
}

export const allProjects: Project[] = [
  {
    id: 'casa-pilpilen',
    title: 'Casa Pilpilén',
    category: 'Diseño',
    location: 'Concón, Chile',
    year: '2024',
    imageUrl: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
    area: '240 m²',
    stage: 'En construcción',
    purpose: 'Residencial'
  },
  {
    id: 'casa-las-gaviotas',
    title: 'Casa Las Gaviotas',
    category: 'Diseño',
    location: 'Quintero, Chile',
    year: '2024',
    imageUrl: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg',
    area: '250 m²',
    stage: 'Diseño Detalles Constructivos',
    purpose: 'Residencial'
  },
  {
    id: 'loft-casa-caracas',
    title: 'Loft Casa Caracas',
    category: 'Diseño y Remodelación',
    location: 'Limache, Chile',
    year: '2023',
    imageUrl: 'https://images.pexels.com/photos/2884867/pexels-photo-2884867.jpeg',
    area: '100 m²',
    stage: 'Permiso de obra aprobado',
    purpose: 'Residencial'
  },
  {
    id: 'hostal-faro-azul',
    title: 'Hostal Faro Azul',
    category: 'Tramitación Municipal',
    location: 'Valparaíso, Chile',
    year: '2023',
    imageUrl: 'https://images.pexels.com/photos/3593923/pexels-photo-3593923.jpeg',
    area: '270 m²',
    stage: 'Permiso de obra',
    purpose: 'Hostal'
  },
  {
    id: 'casa-estero-el-sauce',
    title: 'Casa Estero El Sauce 32',
    category: 'Tramitación Municipal',
    location: 'Viña del Mar, Chile',
    year: '2025',
    imageUrl: 'https://images.pexels.com/photos/6373406/pexels-photo-6373406.jpeg',
    area: '65 m²',
    stage: 'Permiso de obra',
    purpose: 'Residencial'
  },
  {
    id: 'mobimo',
    title: 'Mobimo',
    category: 'Habilitación Oficinas',
    location: 'Providencia, Santiago, Chile',
    year: '2025',
    imageUrl: 'https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg',
    area: '150 m²',
    stage: 'Permiso de habilitación',
    purpose: 'Oficina'
  }
];

export const featuredProjects = allProjects.slice(0, 6);