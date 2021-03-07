import { booleanSetting, numberSetting } from './helper';

/**
 * Preview settings
 * https://www.raspberrypi.org/documentation/raspbian/applications/camera.md
 */
export const previewSettingDesc = {
  /**
   * Do not display a preview window
   * Disables the preview window completely. Note that even though the preview is disabled,
   * the camera will still be producing frames, so will be using power.
   */
  nopreview: booleanSetting('no preview', true),

  /**
   * Fullscreen preview mode
   * Forces the preview window to use the whole screen.
   * Note that the aspect ratio of the incoming image will be retained, so there may be bars on some edges.
   */
  fullscreen: booleanSetting('fullscreen', false),

  /**
   * Set preview window opacity
   * Sets the opacity of the preview windows. 0 = invisible, 255 = fully opaque.
   */
  opacity: numberSetting('opacity', 0, 255, 255, 1),

  /**
   * Preview window settings <'x,y,w,h'>
   * Allows the user to define the size of the preview window and its location on the screen.
   * Note this will be superimposed over the top of any other windows/graphics.
   */
  //   preview: string;
};

export type PreviewSettingDesc = typeof previewSettingDesc;
