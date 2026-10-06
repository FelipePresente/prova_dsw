export default function CurrentDate() {
    const today = new Date();

    const formatedDate = today.toLocaleDateString('en', {
        weekday: 'long',

        year: 'numeric',

        month: 'long',

        day: '2-digit'
    });

    return (
        <p>{formatedDate}</p>
    );
}
