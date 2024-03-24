import React from 'react';
import styles from './styles.module.css';

// ADD MANDATORY, OPTIONAL AND SUP COMPONENTS, ALIGN DESCRIPTIONS

export default function CustomTable(props) {
    const showLogCollectionRow = props.showLogCollectionRow === 'true';
    const showReplayRows = props.showReplayRows === 'true';
    const showSourceFields = props.showSourceFields === 'true';

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
                    <td>Mandatory. Specifies the unit for the query delay. Possible values: <code>Second</code> | <code>Minute</code>.</td>
                </tr>
                <tr>
                    <td><code>queryDelay.value</code></td>
                    <td><em>numeric</em></td>
                    <td>Mandatory. Specifies the value for the query delay. Must be a number less than 1440 minutes (24 hours).</td>
                </tr>
                {showLogCollectionRow && (
                    <tr>
                        <td><code>logCollectionEnabled</code></td>
                        <td><em>boolean</em></td>
                        <td>Optional. Defaults to <code>false</code>. Set to <code>true</code> if you'd like your direct to collect event logs. Beta functionality available only through direct release channel. Reach out to <a href="mailto:support@nobl9.com">support@nobl9.com</a> to activate it.</td>
                    </tr>
                )}
                <tr>
                    <td><code>releaseChannel</code></td>
                    <td><em>string</em></td>
                    <td>Mandatory. Specifies the release channel. Must be one of: <code>beta</code> or <code>stable</code>.</td>
                </tr>
                {
                    showSourceFields && (
                        <>
                            <tr>
                                <td className={styles.categoryRow} colSpan={3}>{props.sourceNameFields}</td>
                            </tr>
                        </>
                    )}
                {props.additionalRows.map((row, index) => (
                    <tr key={index}>
                        <td><code>{row.field}</code></td>
                        <td><em>{row.type}</em></td>
                        <td dangerouslySetInnerHTML={{ __html: row.description }} />
                    </tr>
                ))}
                {showReplayRows && (
                    <>
                        <tr>
                            <td className={styles.categoryRow} colSpan={3}>Replay-related fields (<code>historicalDataRetrieval</code>)</td>
                        </tr>
                        <tr>
                            <td><code>maxDuration.value</code></td>
                            <td><em>numeric</em></td>
                            <td>Mandatory. Specifies the maximum duration for historical data retrieval. Must be greater than or equal to 0.</td>
                        </tr>
                        <tr>
                            <td><code>maxDuration.unit</code></td>
                            <td><em>enum</em></td>
                            <td>Mandatory. Specifies the unit for the maximum duration of historical data retrieval. Accepted values: <code>Minute</code>, <code>Hour</code>, <code>Day</code>.</td>
                        </tr>
                        <tr>
                            <td><code>defaultDuration.value</code></td>
                            <td><em>numeric</em></td>
                            <td>Mandatory. Specifies the default duration for historical data retrieval. Must be greater than or equal to 0 and less than or equal to the value of <code>maxDuration</code>.</td>
                        </tr>
                        <tr>
                            <td><code>defaultDuration.unit</code></td>
                            <td><em>enum</em></td>
                            <td>Mandatory. Specifies the unit for the default duration of historical data retrieval. Accepted values: <code>Minute</code>, <code>Hour</code>, <code>Day</code>.</td>
                        </tr>
                    </>
                )}
            </tbody>
        </table>
    );
}
