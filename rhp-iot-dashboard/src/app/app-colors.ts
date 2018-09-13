// TODO make this based on Less
export class Colors {

    public static PRIMARY: string = "#5f99f5";
    public static DANGER: string = "#eb6357";
    public static WARNING: string = "#f6c163";
    public static GREY: string = "#444444";
    public static AMBER: string = "#f6c163"; //rgb(255, 153, 0, 0.8)";
    public static GREEN = "#37b358";

}

  // given a hex color string, lighten or darken it.
  // copy-paste from https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
  // TODO look for better color libraries
  export function shadeColor(color: string, percent: number) {
    var f = parseInt(color.slice(1), 16), t = percent < 0 ? 0 : 255, p = percent < 0 ? percent * -1 : percent, R = f >> 16, G = f >> 8 & 0x00FF, B = f & 0x0000FF;
    return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
  }
