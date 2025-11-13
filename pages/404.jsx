import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'Böyle bir sayfa maalesef bulunamadı.',
        'Hata! Bu Yolun Sonu.',
        'Böyle bir yer olduğuna eminmisin?'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Page not found."} />
}

export default UnkownPage;


