var url = new URL(window.location).searchParams.get("USER");
export const ADMIN = url.substring(0, url.lastIndexOf("@"));
export const BUCKET = 'rdsdatalakelambdatesting';
export const ADMIN_EMAIL = 'alena.moison@delwp.vic.gov.au';
export const EPSG_CODES = ['28355', '28354', '3111', '4326', '3857', '4283', '7854', '7855', '7899', '1168'];
export const SPATIAL = ['tiles', 'mosalic', 'mosaicFootprint', 'titleIndex', 'centerPoints','thumbnails','frames', 'contours', 'irregularPoints', 'regularSurface']

