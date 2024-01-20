import { Todo } from "./components/Todo/Todo";
import { Colors } from "./enums/colors";

export default function Home() {
  return (
    <main>
      <Todo title="Some cool title" body="Some cool task to do in here" isFavorited={false} color={Colors.BABY_BLUE} />

      <br />

      <Todo title="Some cool title" body="Some cool task to do in here" isFavorited={true} color={Colors.WHITE} />

      <br />

      <Todo
        title="Some cool title"
        body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, corrupti accusamus. Cum vero alias consequatur ab? A adipisci eos accusantium ab perspiciatis. Vel hic, dolores nam sequi enim commodi. Quos deserunt, optio quis ipsum neque dicta error similique commodi, nemo illo repellat, quidem nobis expedita. Eligendi ad reiciendis unde sapiente debitis quis quo, neque nihil impedit non placeat voluptatum nobis, repudiandae eum itaque deleniti nemo veniam, temporibus iste. Similique blanditiis numquam exercitationem officiis pariatur veritatis maxime corrupti porro rerum enim quam quos, tempora nulla, deleniti necessitatibus ipsam delectus. Nostrum reiciendis impedit, expedita nisi animi odit inventore vero consequatur doloremque dolor, ullam nobis nihil neque officia nulla hic sint dolorum vel, explicabo sequi quae temporibus voluptate? Quae sed quidem obcaecati! Voluptate officia obcaecati veniam mollitia maxime laboriosam saepe incidunt, asperiores natus eum ad, quaerat accusantium vitae iste. Quasi quod dolore nesciunt ut. Quaerat ipsam asperiores iste, soluta eligendi dicta sed. Animi laudantium inventore hic obcaecati in sapiente alias dolorum dolorem, praesentium adipisci deleniti, minus nesciunt ea eum tenetur ratione nobis aperiam rerum ut mollitia. Quis ab, recusandae eius a minus neque rem voluptatem ipsa porro voluptatum! Dolores, molestias repudiandae? Voluptatum fuga soluta enim minus assumenda esse iusto officiis impedit adipisci deserunt."
        isFavorited={false}
        color={Colors.FLUORESCENT_GREEN}
      />
    </main>
  );
}
