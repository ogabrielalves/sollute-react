import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom'

export default function PositionedMenu({ route }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <ListItem button
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                <ListItemIcon>
                    {route.icon}
                </ListItemIcon>
                <ListItemText primary={route.title} />
            </ListItem>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    horizontal: 'right',
                    vertical: 'top',
                }}
                transformOrigin={{
                    horizontal: 'left',
                    vertical: 'top',
                }}
            >
                {route.children.map((child) => {
                    return (
                        <Link key={child.title} to={child.link} style={{ textDecoration: 'none', color: '#000000' }}>
                            <MenuItem onClick={handleClose}>{child.title}</MenuItem>
                        </Link>
                    )
                })}
            </Menu>
        </div>
    );
}