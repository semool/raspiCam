import { numberSetting, enumSetting, booleanSetting } from '.';

/**
 * Still settings
 * https://www.raspberrypi.org/documentation/raspbian/applications/camera.md
 */
export const stillSettingDesc = {
  /** Set image width <size> 4056  */
  width: numberSetting('Width', 64, 4056, 4056, 1),

  /** Set image height <size> 3040 */
  height: numberSetting('Height', 64, 3040, 3040, 1),

  /** Set JPEG quality <0 to 100> */
  quality: numberSetting('Quality', 0, 100, 80, 5),

  /**
   * Time before the camera takes picture and shuts down.
   * The program will run for the specified length of time, entered in milliseconds.
   * It then takes the capture and saves it if an output is specified.
   * If a timeout value is not specified, then it is set to 5 seconds (-t 5000).
   * Note that low values (less than 500ms, although it can depend on other settings)
   * may not give enough time for the camera to start up and provide enough frames
   * for the automatic algorithms like AWB and AGC to provide accurate results.
   */
  timeout: numberSetting('Timeout', 1, 216000000, 1, 500),

  /**
   * time-lapse mode
   * The specific value is the time between shots in milliseconds.
   * Note that you should specify %04d at the point in the filename where you want a frame count number to appear.
   * -t 30000 -tl 2000 -o image%04d.jpg
   */
  timelapse: numberSetting('Timelapse', 0, 120000, 0, 500),

  /**
   * Encoding to use for output file
   * Valid options are jpg, bmp, gif, and png. Note that unaccelerated image types (GIF, PNG, BMP)
   * will take much longer to save than jpg, which is hardware accelerated.
   * Also note that the filename suffix is completely ignored when deciding the encoding of a file.
   */
  encoding: enumSetting('Encoding', ['jpg', 'bmp', 'gif', 'png'], 'jpg'),

  /** Add raw Bayer data to JPEG metadata */
  raw: booleanSetting('Raw', false),

  /**
   * Sets the JPEG restart marker interval to a specific value.
   * Can be useful for lossy transport streams because it allows a broken JPEG file to still be partially displayed.
   */
  restart: booleanSetting('Restart', false),

  /**
   * Full preview mode
   * This runs the preview window using the full resolution capture mode.
   * Maximum frames per second in this mode is 15fps, and the preview will have the same field of view as the capture.
   * Captures should happen more quickly, as no mode change should be required. This feature is currently under development.
   */
  fullpreview: booleanSetting('Full preview mode', false),

  /**
   * Link latest frame to filename <filename>
   * Makes a file system link under this name to the latest frame.
   */
  // latest: string;

  /** Output verbose information during run */
  // verbose: string;

  /**
   * Specifies the first frame number in the timelapse.
   * Useful if you have already saved a number of frames, and want to start again at the next frame.
   */
  // framestart: number;

  /**
   * Instead of a simple frame number, the timelapse file names will use a date/time value
   * of the format aabbccddee, where aa is the month, bb is the day of the month,
   * cc is the hour, dd is the minute, and ee is the second.
   */
  // timestamp: boolean;

  /**
   * Set thumbnail parameters (x:y:quality)
   * Allows specification of the thumbnail image inserted into the JPEG file.
   * If not specified, defaults are a size of 64x48 at quality 35.
   */
  // thumb: string | 'none';

  /**
   * EXIF tag to apply to captures (format as 'key=value')
   * Allows the insertion of specific EXIF tags into the JPEG image. You can have up to 32 EXIF tag entries.
   */
  // exif: string;

  /**
   * Specify the output filename.
   */
  // output: string;
};
