export interface IProjectData {
  id: number,
  name: string
  site_url?: string | null
  repository_url: string | null
  isInMaintenance: boolean,
  design_concept_text: string,
  objetive_text: string
}

