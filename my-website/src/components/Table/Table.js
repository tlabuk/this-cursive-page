import React from 'react';
import styles from './styles.module.css';

export default function CustomTable(props) {
    return (
        <table className={styles.stickyTable}>
            <thead>
                <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>queryDelay.unit</code></td>
                    <td><em>enum</em></td>
                    <td>Mandatory. Specifies the unit for the query delay. Possible values: <code>Second</code> or <code>Minute</code>.</td>
                </tr>
                <tr>
                    <td><code>queryDelay.value</code></td>
                    <td><em>numeric</em></td>
                    <td>Mandatory. Specifies the value for the query delay. Must be a number less than 1440 minutes (24 hours).</td>
                </tr>
                <tr>
                    <td><code>logCollectionEnabled</code></td>
                    <td><em>boolean</em></td>
                    <td>Optional. Defaults to <code>false</code>. Set to <code>true</code> if you'd like your source to collect logs. Beta functionality available only through direct release channel. Reach out to <a href="mailto:support@nobl9.com">support@nobl9.com</a> to activate it.</td>
                </tr>
                <tr>
                    <td><code>releaseChannel</code></td>
                    <td><em>string</em></td>
                    <td>Mandatory. Specifies the release channel. Must be one of: <code>beta</code> or <code>stable</code>.</td>
                </tr>
                {/* <tr>
                    <td colSpan={3}>{props.sourceName}Blop</td>
                </tr> */}
                <tr>
                    <td><code>{props.directField}</code></td>
                    <td><em>{props.directFieldType}</em></td>
                    <td dangerouslySetInnerHTML = {{ __html: props.directFieldTypeDescription }} />
                </tr>
            </tbody>
        </table>
    );
}

