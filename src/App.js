import {
    Box,
    Button,
    CardActions,
    CardHeader,
    Collapse,
    createTheme,
    CssBaseline,
    Divider,
    Fade,
    FormControlLabel,
    Grid,
    IconButton,
    Modal,
    Paper,
    Radio,
    RadioGroup,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    ThemeProvider,
    Typography
} from "@mui/material";
import {ReactComponent as Logo} from './logo.svg';
import {useState} from "react";
import ThemeMode from "./components/ThemeMode";
import {useSelector} from "react-redux";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
    createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
    createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

function createData(name, calories, fat, carbs, protein, price) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
        price,
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    };
}

function App() {
    const [language, setLanguage] = useState('java');
    const [javaVersion, setJavaVersion] = useState('8');
    const [group, setGroup] = useState('com.example');
    const [author, setAuthor] = useState('Test User');

    const [entities, setEntities] = useState(["a"]);

    const {mode, isDark} = useSelector(state => state.theme);
    const theme = createTheme({
        palette: {
            mode,
            primary: {
                main: isDark ? '#fff' : '#000'
            },
            secondary: {
                main: isDark ? '#000' : '#fff'
            }
        },
        components: {
            MuiCardActions: {
                styleOverrides: {
                    root: {
                        backgroundColor: isDark ? '#262a2d' : '#ecf2f2'
                    }
                }
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        backgroundColor: isDark ? '#121212' : '#fff'
                    }
                }
            }
        }
    });

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [openRow, setOpenRow] = useState(false);
    const handleOpenRow = () => setOpenRow(true);
    const handleCloseRow = () => setOpenRow(false);

    const addEntities = (event) => {
        setEntities(["asd", ...entities])
    };

    const listItem = () => {
        return entities.map((number) =>
            <li key={number.toString()}>
                {number}
            </li>)
    }

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    const handleJavaVersionChange = (event) => {
        setJavaVersion(event.target.value);
    };

    const handleGroupChange = (event) => {
        setGroup(event.target.value);
    };

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Grid display={"flex"} justifyContent={"center"}>
                <Grid container
                      sx={{
                          flex: 1,
                          minHeight: '100vh',
                          maxWidth: 'xl',
                          flexDirection: 'column',
                          paddingLeft: 3,
                          paddingRight: 3
                      }}>
                    <Grid sx={{
                        padding: 2,
                        flex: 1,
                        borderLeft: 1,
                        borderRight: 1,
                        borderColor: '#dce8e8'
                    }}>

                        <ThemeMode/>
                        <CardHeader
                            title={
                                <Logo style={{maxWidth: 350}}/>
                            }
                            sx={{paddingLeft: 0}}
                        />
                        <Divider/>
                        <Grid container>
                            <Stack sx={{paddingTop: 2, marginTop: 2}} spacing={6} flex={1} borderRight={1}
                                   borderColor="#dce8e8">
                                <Stack spacing={2}>
                                    <Typography sx={{fontWeight: 'bold'}}>
                                        Language
                                    </Typography>
                                    <Stack spacing={2} paddingLeft={2} paddingRight={4}>
                                        <RadioGroup row value={language} onChange={handleLanguageChange}>
                                            <FormControlLabel value="java" control={<Radio/>} label="Java"/>
                                            <FormControlLabel value="kotlin" control={<Radio/>} label="Kotlin"/>
                                            <FormControlLabel value="groovy" control={<Radio/>} label="Groovy"/>
                                        </RadioGroup>
                                    </Stack>
                                </Stack>
                                <Stack spacing={2}>
                                    <Typography sx={{fontWeight: 'bold', fontSize: '1rem'}}>
                                        Project Metadata
                                    </Typography>
                                    <Stack spacing={2} paddingLeft={2} paddingRight={4}>
                                        <TextField id="group-name" name="group" variant="standard" label="Group"
                                                   value={group}
                                                   onChange={handleGroupChange}/>
                                        <TextField id="author-name" name="author" variant="standard" label="Author"
                                                   value={author} onChange={handleAuthorChange}/>
                                    </Stack>
                                </Stack>
                                <Stack spacing={1}>
                                    <Typography sx={{fontWeight: 'bold', fontSize: '1rem'}}>
                                        Java Version
                                    </Typography>
                                    <Stack spacing={2} paddingLeft={2} paddingRight={4}>
                                        <RadioGroup row value={javaVersion} onChange={handleJavaVersionChange}>
                                            <FormControlLabel value="8" control={<Radio/>} label="8"/>
                                            <FormControlLabel value="11" control={<Radio/>} label="11"/>
                                            <FormControlLabel value="17" control={<Radio/>} label="17"/>
                                        </RadioGroup>
                                    </Stack>
                                </Stack>
                            </Stack>
                            <Stack sx={{paddingTop: 2, paddingLeft: 2, marginTop: 2}} spacing={6} flex={1}>
                                <Stack spacing={1}>
                                    <Stack spacing={1} borderBottom={1} borderColor="#dce8e8" paddingBottom={1}
                                           flexDirection="row" justifyContent="space-between" alignItems="center">
                                        <Typography sx={{
                                            fontWeight: 'bold',
                                            fontSize: '1rem'
                                        }}>
                                            Entities
                                        </Typography>
                                        <Button variant="outlined" size="large" color="primary" onClick={handleOpen}>
                                            Add Entity
                                        </Button>
                                    </Stack>
                                    <Stack>
                                        <TableContainer component={Paper}>
                                            <Table>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell colSpan={2}>
                                                            <IconButton
                                                                aria-label="expand row"
                                                                size="small"
                                                                onClick={() => setOpenRow(!openRow)}
                                                            >
                                                                {openRow ? <KeyboardArrowUpIcon/> :
                                                                    <KeyboardArrowDownIcon/>}
                                                            </IconButton>
                                                            User Entity
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell style={{paddingBottom: 0, paddingTop: 0}}
                                                                   colSpan={2}>
                                                            <Collapse in={openRow}>
                                                                <Table size="small">
                                                                    <TableHead>
                                                                        <TableRow>
                                                                            <TableCell>Property Name</TableCell>
                                                                            <TableCell>Property Type</TableCell>
                                                                        </TableRow>
                                                                    </TableHead>
                                                                    <TableBody>
                                                                        <TableRow
                                                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                                                            <TableCell>username</TableCell>
                                                                            <TableCell>String</TableCell>
                                                                        </TableRow>
                                                                        <TableRow
                                                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                                                            <TableCell>name</TableCell>
                                                                            <TableCell>String</TableCell>
                                                                        </TableRow>
                                                                    </TableBody>
                                                                </Table>
                                                            </Collapse>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Stack>
                                    <Typography sx={{fontSize: '0.8rem', fontStyle: 'italic'}}>
                                        No entity added
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                    <CardActions
                        sx={{
                            minHeight: 100,
                            justifyContent: 'center',
                            borderLeft: 1,
                            borderRight: 1,
                            borderBottom: 1,
                            borderColor: '#dce8e8'
                        }}>
                        <Button variant="outlined" size="large">
                            GENERATE
                        </Button>
                        <Button variant="outlined" size="large">
                            EXPLORE
                        </Button>
                        <Button variant="outlined" size="large">
                            SHARE...
                        </Button>
                    </CardActions>
                </Grid>
            </Grid>
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="spring-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="spring-modal-description" sx={{mt: 2}}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </ThemeProvider>
    );
}

export default App;
