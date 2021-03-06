import React , { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import FolderIcon from '@material-ui/icons/Note';
import TextField from '@material-ui/core/TextField';
import '../list/style.css';
import DialogMetaData from '../metadata';
import {ADMIN_EMAIL, ADMIN, BUCKET} from '../../constants';
import Processing from '../processing';
import * as actions from '../actions';
import { connect} from 'react-redux';
import { compose } from 'redux'
import { getState } from '../reducer';
import Error from '../dialogs/validation';



import FilterListIcon from '@material-ui/icons/FilterList';
import { lighten } from '@material-ui/core/styles/colorManipulator';

let counter = 0;
function createData(folderName, custodian, projectName) {
  counter += 1;
  
  return { id: counter, folderName, custodian, projectName };
}

const columnData = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Folder Name' },
  { id: 'custodian', numeric: false, disablePadding: false, label: 'Data Custodian' },
  { id: 'project', numeric: false, disablePadding: false, label: 'Project Name' }
];

class EnhancedTableHead extends React.Component {
  
  

  render() {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, view, data} = this.props;
   
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
          {columnData.map(column => {
            return (
              <TableCell
                key={column.id}
                numeric={column.numeric}
                padding={column.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === column.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={order}
                    
                  >
                    {column.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
});

let EnhancedTableToolbar = props => {
  
  const { numSelected, classes, view, handlePublish} = props;

  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subheading">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography variant="title" id="tableTitle">
            {view}
          </Typography>
        )}
      </div>
      <div className={classes.spacer} />
      {numSelected > 0 ? (
      <div className={classes.actions}>
          <Tooltip title="Ingest">
            <IconButton aria-label="Publish" onClick={handlePublish}>
              <SaveIcon />
            </IconButton>
          </Tooltip>
      </div>) :''}
    </Toolbar>
  );
};


EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class EnhancedTable extends React.Component {
  constructor(props) {
    super(props);
    const {data} = this.props;
    var projects = [];

    data && data.length > 0 ? data.forEach(function(value, index) {
      
        projects.push(createData(value, ADMIN, ''));
      }) : [],
  
    this.state = {
      order: 'asc',
      orderBy: 'name',
      selected: [], 
      data: projects,
      page: 0,
      rowsPerPage: 5,
    };
    this.handleRequestSort = this.handleRequestSort.bind(this);
    this.handleSelectAllClick = this.handleSelectAllClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
    this.isSelected = this.isSelected.bind(this);
    this.handlePublish = this.handlePublish.bind(this);
  }

 

  handleRequestSort(event, property) {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    const data =
      order === 'desc'
        ? this.state.data.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
        : this.state.data.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));
        
    if(event){
      this.setState({ data:data, order:order, orderBy:orderBy });
    }
  }

  handleSelectAllClick (event, checked) {
    if (checked) {
      this.setState({ selected: this.state.data.map(n => n.id) });
      return;
    }
    this.setState({ selected: [] });
  }
  /**
   * Publishing the projects
   */
  handlePublish(){
    
    var arrEmails = [ADMIN_EMAIL];
    var arrProjects = [];
    var indexSelected = 0;
    var validation = true;

    for(let i = 0; i < this.state.data.length; i++){  
        /**
         * Validating Project Names
         */
        
         if(this.state.data[i].id == this.state.selected[indexSelected]){
          
          if(indexSelected == this.state.selected.length){
              break;
          }
          else if(this.state["Project"+this.state.data[i].id] == undefined || this.state["Project"+this.state.data[i].id].trim() == ''){
           
              validation = false;
              indexSelected++;
              
          } else {
            indexSelected++;
          }
          
        }
      }

      indexSelected = 0;
      if(validation){
        for(let i = 0; i < this.state.data.length; i++){  
            
             if(this.state.data[i].id == this.state.selected[indexSelected]){
              
              if(indexSelected == this.state.selected.length){
                  break;
              }
              else {
                  arrProjects.push(this.state["Project" + this.state.data[i].id]);
                  this.props.requests.requestIngestProject(BUCKET, this.state["Project"+this.state.data[i].id], ADMIN, 'Ingestion/'+ ADMIN + '/' + this.state.data[i].folderName);
                  indexSelected++;
              }
              
            }
        }
      
        //this.props.requests.requestUnIngestedProjects(ADMIN,true); 
      }
    else {
        alert('Project Name is mandatory');
    }
    
    
  }

  handleClick (event, id) {
    let indexSelected = 0;
    const { selected } = this.state;
    
    
    
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    this.setState({ selected: newSelected });
  }

  handleChangePage(event, page){
    this.setState({ page });
  }

  handleChangeRowsPerPage (event) {
    if(event.target){
      this.setState({ rowsPerPage: event.target.value });
    }
  }

  isSelected(id){this.state.selected.indexOf(id) !== -1}

  render() {
    
    const { classes, view, data, isReady } = this.props;
    const {order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows = this.state.data ? rowsPerPage - Math.min(rowsPerPage, this.state.data.length - page * rowsPerPage) : 0;
    
    return (
      <Paper className={classes.root}>
       
        <EnhancedTableToolbar numSelected={selected.length} view={view} handlePublish={this.handlePublish} />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={this.state.data.length}
            />
            <TableBody>
              {
                
                this.state.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(project => {
                const isSelected = this.isSelected(project.id);
                
                return (
                    <TableRow hover tabIndex={-1} key={project.id}>
                        <TableCell padding="checkbox">
                            <Checkbox checked={isSelected} onClick={event => this.handleClick(event, project.id)}/>
                        </TableCell>
                        <TableCell component="th" scope="row" padding="none">{project.folderName}</TableCell>
                        <TableCell>{project.custodian}</TableCell>
                        <TableCell>
                            <TextField
                                required
                                id={"Project"+project.id}
                                label="Project Name"
                                value={this.state["Project" + project.id]}
                                margin="normal"
                                key={"Project"+project.id}
                                onChange = {(event) => this.setState({ ["Project" + project.id]: event.target.value })}/>
                        </TableCell>
                  </TableRow>
                );
              })}
              
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={this.state.data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles), connect(getState, actions))(EnhancedTable);
