import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';

export default function BasicPopover(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <IconButton aria-label="delete">
                <HelpIcon style={{ color: '#1F71DB' }} onClick={handleClick}/>
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Typography sx={{ p: 2 }}>{props.children}</Typography>
            </Popover>
        </div>
    );
}