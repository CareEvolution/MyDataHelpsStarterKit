import { Layout, StatusBarBackground } from "@careevolution/mydatahelps-ui"
import TaskProgress from '../components/TaskProgress/TaskProgress';

export default function () {
	return (
		<Layout>
			<StatusBarBackground color="var(--main-bg-color)" />
			<TaskProgress />
		</Layout>
	)
}