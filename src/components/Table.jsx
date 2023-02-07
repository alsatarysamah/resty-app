
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';


export default function Table(props) {


  const pagination = paginationFactory({
    page: 2,
    sizePerPage: 7,
    nextPageText: '>',
    prePageText: '<',
    showTotal: false,
    selected:true,
    hideSizePerPage:true,//select from the  UI how many items per page
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    }
  });
  
  return (
    <div >
      <BootstrapTable responsive hover={true}   keyField='id' data={props.data}  columns={props.columns}  pagination={pagination} />
    </div>
  );
}


