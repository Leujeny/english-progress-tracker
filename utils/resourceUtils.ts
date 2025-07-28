export function transformerRessourcesEnOptions(ressources: Ressource[]): Option[] {
  return ressources.map(ressource => ({
    value: ressource.name,
    label: ressource.name
  }));
}