import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import copy from "copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import useClipboard from "react-use-clipboard";

import { inIframe } from "../../utils";
import "./index.css";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const SHARE_BASE_URL = "https://git-contributor.com";
const IMG_BASE_URL =
  "https://contributor-overtime-api.git-contributor.com/contributors-svg";

const ShareLink = ({ params = "" }) => {
  return (
    <>
      
    </>
  );
};

function ShareModal({ params = "" }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: 0,
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));
  const classes = useStyles();
  const shareUrl = SHARE_BASE_URL + params;
  const shareText = params.includes("contributorMonthlyActivity")
    ? "monthly active contributor"
    : "GitHub contributor over time";

  return (<>
      
    </>
   
  );
}

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (<>
      
    </>
   
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export const MarkdownLink = ({ params = "", type = "contributorOverTime" }) => {
  const title =
    type === "contributorOverTime"
      ? "GitHub Contributor Over Time"
      : "Monthly Active Contributors";

  const value = `
### ${title}

[![${title}](${IMG_BASE_URL + params})](${SHARE_BASE_URL + params})`;

  const [isCopied, setCopied] = useClipboard(value, { successDuration: 3000 });

  return (<>
      
    </>
    
  );
};

export default function CustomizedDialogs({
  open = false,
  onChange = () => { },
  params = "",
}) {
  const handleClose = () => {
    onChange(false);
  };
  return (
   <>
      
    </>
  );
}
