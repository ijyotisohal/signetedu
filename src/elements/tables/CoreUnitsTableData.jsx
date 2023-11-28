import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTranslations } from '../../actions/languageActions';
import { useParams } from 'react-router-dom';
import { slugify } from '../../utils';
import Loading from '../../components/loading/Loading';

function CoreUnitsTableData() {
    const params = useParams();
  const courseSlug = params.slug;
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state) => state.language.selectedLanguage);
  const translations = useSelector((state) => state.language.translations[selectedLanguage]);
    
    useEffect(() => {
      dispatch(fetchTranslations(selectedLanguage));
    }, [dispatch, selectedLanguage]);
    
    if (!translations) {
      return <div><Loading/></div>; // Show loading state while translations are being fetched
    }
    
    const { homepage } = translations;
    const Data = homepage.program.coursesList;
    console.log("Data",Data)
    const getCourseData =Data && Data.filter(data => slugify(data.mainTitle) === courseSlug);
    const detailsService = getCourseData[0];
  return (
    <Table striped>
      <thead>
        <tr>
          <th>List</th>
          <th>Code </th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        
          {
    detailsService.coreUnits.coreUnitsList.map((data)=>(
   <>
   <tr>
   <td>{data.id}</td>
          <td>{data.title}</td>
          <td>{data.data}</td>
          </tr>
   </>
    ))
 }
  
      </tbody>
    </Table>
  );
}

export default CoreUnitsTableData;