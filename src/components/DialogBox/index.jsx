import React from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import CodeIcon from '@material-ui/icons/Code';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import GetAppIcon from '@material-ui/icons/GetApp';
import FilterNoneOutlinedIcon from '@material-ui/icons/FilterNoneOutlined';
import useClipboard from "react-use-clipboard";
import { handleShareToTwitterClick } from "../../utils";
import { Snackbar, makeStyles } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import DialogContentText from '@material-ui/core/DialogContentText';
import moment from "moment";

export const DialogBox = ({ params = "" }) => {
  const [showNotice, setShowNotice] = React.useState(false);
  const [showEmbedModal, setShowEmbedModal] = React.useState(false);
  const [activeDate, setActiveDate] = React.useState("Link");
  const useStyles = makeStyles(() => ({
    root: {
      backgroundColor: '#e53e3e',
      color: '#fff',
      border: 'none',
      padding: '0 10px',
      textTransform: 'none',
      margin: '0 0 10px 10px',
      lineHeight: '2.25rem',
      '&:hover': {
        backgroundColor: '#c53030'
      }
    },
    color: {
      color: '#3e434a',
      backgroundColor: '#F3F4F5',
      border: '1px solid #E0E0E0',
      textTransform: 'none',
      margin: '0 0 10px 10px',
      '&:hover': {
        backgroundColor: '#e5e7eb',
      }
    },
  }));
  const classes = useStyles();
  const SHARE_BASE_URL = "https://git-contributor.com/";
  const [, setCopy] = useClipboard(`${SHARE_BASE_URL}${params}`, { successDuration: 3000 });
  const embedCode = `<iframe style={{ width: "100%", height: "auto" , minWidth: "600px", minHeight: "1000px" }} src="${SHARE_BASE_URL}${params}" frameBorder="0"></iframe>`
  const [, setEmbedcopy] = useClipboard(embedCode, { successDuration: 3000 })

  const SearchButton = () => (
    <Button
      className={classes.root}
      value="embedCodeCopy"
      style={{ position: 'absolute', bottom: '0', right: '10px', lineHeight: '2.5rem', borderRadius: '0.375rem', fontSize: '15px', padding: '0 16px' }}
      onClick={(e) => {
        setEmbedcopy();
        setShowNotice(true);
        setActiveDate(e.currentTarget.value)
      }}
    >
      Copy
    </Button>
  );
  return (<> 
          </>
  );
}
