


const ActivityTable = () => {
  return (
     <>
       <div className="w-[98%] mt-5">
        <table className="w-full border-spacing-0 border-separate border-2 border-black rounded-sm overflow-hidden">
            <thead>
                <tr>
                    <th className="tableHead">EVENT ID</th>
                    <th className="tableHead">CATEGORY</th>
                    <th className="tableHead">VOTED</th>
                    <th className="tableHead">VOTES</th>
                    <th className="tableHead">COST OF VOTING</th>
                    <th className="tableHead">DATE</th>
                    <th className="tableHead">TIME</th>
                </tr>
            </thead>

            <tbody>
                {Array.from({ length: 8 }).map((_, index) => (
                    <tr key={index}>
                        <td className="tableData">eveID_13238423823</td>
                        <td className="tableData">catID_42833192003</td>
                        <td className="tableData">candidate {index + 1}</td>
                        <td className="tableData">25</td>
                        <td className="tableData">$ 1.2</td>
                        <td className="tableData">12th Dec, 2022</td>
                        <td className="tableData">11:45pm</td>
                    </tr>
                ))}
            </tbody>
        </table>
       </div>
     </>
  )
}



export default ActivityTable