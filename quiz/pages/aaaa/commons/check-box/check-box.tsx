import { withStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import styled from "@emotion/styled";

// const GreenCheckbox = withStyles({
//   root: {
//     color: purple["700"],
//     "&$checked": {
//       color: purple["700"],
//     },
//   },
//   checked: {},
// })((props) => <Checkbox color="default" {...props} />);

// const PurpleCheckBox = styled(Checkbox)`
//   .MuiCheckbox-colorPrimary {
//     background-color: red;
//   }
// `;
const GreenCheckBox = styled.input`
  .change input,
  .change progress {
    color: red;
  }
`;
export default function CheckboxPurple(props) {
  return (
    <div>
      <GreenCheckBox type="checkbox" checked={props.checked} />
    </div>
  );
}
