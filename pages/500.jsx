import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    return <ErrorPage code={500} message={"Oh. Bu 500 Internel Server Hatası Lütfen Daha Sonra Tekrar Dene!"} />
}


export default UnkownPage;
