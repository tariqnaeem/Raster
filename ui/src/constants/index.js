var url = new URL(window.location).searchParams.get("USER");
export const ADMIN = url ? url.substring(0, url.lastIndexOf("@")) : '';
export const BUCKET = 'rdsdatalakelambdatesting';
export const ADMIN_EMAIL = 'alena.moison@delwp.vic.gov.au';
export const DISCLAIMER_ID = ['Default'];
export const BOOL = ['Y', 'N'];
export const SECURITY_CLASSIFICATION_ID = [ 'Unclassified', 'Unclassified - Public Domain',
                                            'Security Classified - Protected',
                                            'Security Classified - Confidential',
                                            'Security Classified - Secret',
                                            'Security Classified - Top Secret'];
export const LICENCE_TYPE = [   'General',
                                'DataVic',
                                'Restricted',
                                'Departmental'];
export const INFORMATION_ASSET = ['Information', 'Critical', 'Significant'];
export const EPSG_CODES = ['28355', '28354', '3111', '4326', '3857', '4283', '7854', '7855', '7899', '1168'];
export const SPATIAL = ['tiles', 'mosalic', 'mosaicFootprint', 'titleIndex', 'centerPoints','thumbnails','frames', 'contours', 'irregularPoints', 'regularSurface']

