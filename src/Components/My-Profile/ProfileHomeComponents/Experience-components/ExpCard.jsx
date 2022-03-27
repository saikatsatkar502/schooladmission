import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Divider, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Delete, Edit } from '@mui/icons-material';
import React from 'react'

export default function ExpCard(props) {
    const { id, Title, EmployementType, CompanyName, Location, StartDate, EndDate, HeadLine, Description } = props.Experience

    function stringToColor(string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}`,
        };
    }
    return (
        <div>
            <List>
                <ListItem

                    secondaryAction={
                        <IconButton edge="end" aria-label="delete" onClick ={() => props.cickHandler(id)}>
                            <Delete/>
                        </IconButton>
                    }

                >
                    <ListItemAvatar>
                        <Avatar {...stringAvatar(CompanyName)} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={CompanyName}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {Title}{EmployementType}
                                </Typography>
                                {Location}
                                {StartDate}
                                {EndDate}
                            </React.Fragment>
                        }
                    />

                </ListItem>
                <Divider variant="inset" component="li" />
            </List>
        </div >
    )
}
