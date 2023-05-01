import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface TableOrderProps {
  itemsData: any;
  sum: number;
  quanSum: number;
  discount: string;
  discountSum: number;
}

export default function TableOrder({
  itemsData,
  sum,
  quanSum,
  discount,
  discountSum,
}: TableOrderProps) {
  console.log(itemsData);

  const rows = itemsData?.map((el: any) => {
    return {
      name: el.name,
      quantity: el.quantity,
      price: el.price,
      sum: el.itemTotal,
    };
  });
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Sum</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.quantity}</StyledTableCell>
              <StyledTableCell align="right">
                {row.price}
                {" грн."}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.sum}
                {" грн."}
              </StyledTableCell>
            </StyledTableRow>
          ))}
          <StyledTableRow>
            <StyledTableCell component="th" scope="row"></StyledTableCell>
            <StyledTableCell align="right">{"discount"}</StyledTableCell>
            <StyledTableCell align="right">{discount}</StyledTableCell>
            <StyledTableCell align="right">
              {discountSum}
              {" грн."}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right">{quanSum}</StyledTableCell>
            <StyledTableCell align="right">
              {sum}
              {" грн."}
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
