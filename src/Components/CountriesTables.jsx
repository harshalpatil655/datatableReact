import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const CountriesTables = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState([]);
  const [filterCountries, setFilterCountries] = useState([]);

  const getCountries = async () => {
    try {
      await axios.get("https://restCountries.com/v2/all").then((res) => {
        setCountries(res.data);
        setFilterCountries(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const columns = [
    {
      name: "Country Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Country Native Name",
      selector: (row) => row.nativeName,
    },
    {
      name: "Country Capital",
      selector: (row) => row.capital,
    },

    {
      name: "Country Flag",
      selector: (row) => <img width={50} height={50} src={row.flag} />,
    },
    {
      name: "Country Name",
      selector: (row) => row.name,
    },
    {
      name: "Country Name",
      selector: (row) => row.name,
    },
    {
      name: "Action",
      cell: (row) => <button className="btn btn-primary">View</button>,
    },
  ];

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    const result = countries.filter((el) => {
      return el.name.toLowerCase().match(search.toLowerCase());
    });
    setFilterCountries(result);
  }, [search]);
  return (
    <DataTable
      title={"Country List"}
      columns={columns}
      data={filterCountries}
      pagination
      fixedHeader
      fixedHeaderScrollHeight="400px"
      highlightOnHover
      actions={<button className="btn btn-info">Export</button>}
      subHeader
      subHeaderComponent={
        <input
          type="text"
          placeholder="Search here"
          className="form-control w-25"
          onChange={(e) => setSearch(e.target.value)}
        />
      }
      subHeaderAlign="left"
    />
  );
};

export default CountriesTables;
