import { SiteTheme } from '../models';
import type { ISiteTheme } from '../models/siteTheme';

// Создание темы
export async function createSiteTheme(props: ISiteTheme) {
  const { id } = props;

  return SiteTheme.findOrCreate({
    where: { id },
    defaults: { ...props },
  }).then(() => {
    SiteTheme.update({ ...props }, { where: { id } });
  });
}

// Обновление темы
export async function updateSiteThemeById(id: number, data: ISiteTheme) {
  return SiteTheme.update(data, { where: { id } });
}

// Получение темы по ID
export async function getSiteThemeById(id: number) {
  return SiteTheme.findOne({ where: { id } });
}

// Удаление темы по ID
export async function deleteSiteThemeById(id: number) {
  return SiteTheme.destroy({ where: { id } });
}
