import styles from "./table.module.css";

export default function Table() {
  return (
    <>
      <div className={styles.dogs}>
        <table className={styles.table}>
          <caption>Table about different breeds of dogs.</caption>
          <colgroup>
            <col />
            <col style={{ backgroundColor: "yellow" }} span={4} />
          </colgroup>
          <tr>
            <td>&nbsp;</td>
            <th>Knocky</th>
            <th>Flor</th>
            <th>Ella</th>
            <th>Juan</th>
          </tr>
          <tr>
            <th>Breed</th>
            <td>Jack Russell</td>
            <td>Poodle</td>
            <td>Streetdog</td>
            <td>Cocker Spaniel</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>16</td>
            <td>9</td>
            <td>10</td>
            <td>5</td>
          </tr>
          <tr>
            <th>Owner</th>
            <td>Mother-in-law</td>
            <td>Me</td>
            <td>Me</td>
            <td>Sister-in-law</td>
          </tr>
          <tr>
            <th>Eating Habits</th>
            <td>Eats everyone's leftovers</td>
            <td>Nibbles at food</td>
            <td>Hearty eater</td>
            <td>Will eat till he explodes</td>
          </tr>
        </table>
      </div>
      <div className={styles.animals}>
        <table className={styles.table}>
          <caption>Table about different types of Animals.</caption>
          <tr>
            <th colSpan={2}>Animals</th>
          </tr>
          <tr>
            <th colSpan={2}>Hippopotamus</th>
          </tr>
          <tr>
            <th rowSpan={2}>Horse</th>
            <td>Mare</td>
          </tr>
          <tr>
            <td>Stallion</td>
          </tr>
          <tr>
            <th colSpan={2}>Crocodile</th>
          </tr>
          <tr>
            <th rowSpan={2}>Chicken</th>
            <td>Hen</td>
          </tr>
          <tr>
            <td>Rooster</td>
          </tr>
        </table>
      </div>

      <div className={styles.time_table}>
        <table>
          <caption>
            Table about Timetable of a teacher teaching different languages.
          </caption>
          <colgroup>
            <col />
            <col />
            <col style={{ backgroundColor: "#97DB9A" }} />
            <col style={{ width: "4.2rem" }} />
            <col style={{ backgroundColor: "#97DB9A" }} />
            <col
              style={{
                backgroundColor: "#DCC48E",
                border: "4px solid #C1437A",
              }}
            />
          </colgroup>
          <tr>
            <td>&nbsp;</td>
            <th>Mon</th>
            <th>Tues</th>
            <th>Wed</th>
            <th>Thurs</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
          </tr>
          <tr>
            <th>1st period</th>
            <td>English</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>German</td>
            <td>Dutch</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <th>2nd period</th>
            <td>English</td>
            <td>English</td>
            <td>&nbsp;</td>
            <td>German</td>
            <td>Dutch</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <th>3rd period</th>
            <td>&nbsp;</td>
            <td>German</td>
            <td>&nbsp;</td>
            <td>German</td>
            <td>Dutch</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <th>4th period</th>
            <td>&nbsp;</td>
            <td>English</td>
            <td>&nbsp;</td>
            <td>English</td>
            <td>Dutch</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </table>
      </div>
      <div className={styles.spending_records}>
        <table>
          <caption>How I chose to spend my money</caption>
          <tr>
            <th scope="col">Purchase</th>
            <th scope="col">Location</th>
            <th scope="col">Date</th>
            <th scope="col">Evaluation</th>
            <th scope="col">Cost (€)</th>
          </tr>
          <tfoot>
            <tr>
              <td colSpan={4}>SUM</td>
              <td>118</td>
            </tr>
          </tfoot>
          <tbody>
            <tr>
              <td scope="row">Haircut</td>
              <td>Hairdresser</td>
              <td>12/09</td>
              <td>Great idea</td>
              <td>30</td>
            </tr>
            <tr>
              <td scope="row">Lasagna</td>
              <td>Restaurant</td>
              <td>12/09</td>
              <td>Regrets</td>
              <td>18</td>
            </tr>
            <tr>
              <td scope="row">Shoes</td>
              <td>Shoeshop</td>
              <td>13/09</td>
              <td>Big regrets</td>
              <td>65</td>
            </tr>
            <tr>
              <td scope="row">Toothpaste</td>
              <td>Supermarket</td>
              <td>13/09</td>
              <td>Good</td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.sold_items}>
        <table>
          <caption>Items Sold August 2016</caption>
          <thead>
            <tr>
              <td colSpan={2} rowSpan={2}></td>
              <th id="clothes" colSpan={3}>
                Clothes
              </th>
              <th id="accessories" colSpan={2}>
                Accessories
              </th>
            </tr>
            <tr>
              <th id="trouser" headers="clothes">
                Trousers
              </th>
              <th id="skirts" headers="clothes">
                Skirts
              </th>
              <th id="dresses" headers="clothes">
                Dresses
              </th>
              <th id="bracelets" headers="accessories">
                Bracelets
              </th>
              <th id="rings" headers="accessories">
                Rings
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan={3}>Belgium</th>
              <th>Antwerp</th>
              <td>56</td>
              <td>22</td>
              <td>43</td>
              <td>72</td>
              <td>23</td>
            </tr>
            <tr>
              <th>Gent</th>
              <td>46</td>
              <td>18</td>
              <td>50</td>
              <td>61</td>
              <td>15</td>
            </tr>
            <tr>
              <th>Brussels</th>
              <td>51</td>
              <td>27</td>
              <td>38</td>
              <td>69</td>
              <td>28</td>
            </tr>
            <tr>
              <th rowSpan={2}>The Netherlands</th>
              <th>Amsterdam</th>
              <td>89</td>
              <td>34</td>
              <td>69</td>
              <td>85</td>
              <td>38</td>
            </tr>
            <tr>
              <th>Utrecht</th>
              <td>80</td>
              <td>12</td>
              <td>43</td>
              <td>36</td>
              <td>19</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}