import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import SettingsListItemText from "src/modules/Settings/SettingsListItemText";
import SettingsListItemIcon from "src/modules/Settings/SettingsListItemIcon";

const SettingsLanguage = () => {
    return (
        <ListItem button disabled>
            <SettingsListItemIcon>
                EN
            </SettingsListItemIcon>
            <SettingsListItemText primary="Language" />
        </ListItem>
    );
};

export default SettingsLanguage;
