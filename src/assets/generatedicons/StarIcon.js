import * as React from 'react';
import Svg, {Path, Defs, Pattern, Use, Image} from 'react-native-svg';
const SvgStarIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 10 11"
    {...props}>
    <Path fill="url(#StarIcon_svg__a)" d="M0 10.7h10V.7H0v10Z" />
    <Defs>
      <Pattern
        id="StarIcon_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox">
        <Use xlinkHref="#StarIcon_svg__b" transform="scale(.01563)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,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"
        id="StarIcon_svg__b"
        width={64}
        height={64}
      />
    </Defs>
  </Svg>
);
export default SvgStarIcon;
