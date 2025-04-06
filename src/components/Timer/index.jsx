export function Timer({timestamp}) {
    return (
        <span>
            {
                new Date(timestamp).toISOString().substr(11, 8)
            }
        </span>
    )
}