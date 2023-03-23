# What is Healthie?

Healthie offers infrastructure for next generation digital health organizations that provide virtual-first care. Healthie’s API-first and fully brandable suite of solutions (Scheduling, EMR, Client Engagement) enables healthcare builders to launch and scale best-in-class experiences for their members. Healthie also offers a built-in marketplace of business and clinical integrations used by our organizations.

To learn more, visit [www.gethealthie.com](www.gethealthie.com).

## Healthie x Awell

With this extension, organizations are able to build clinical workflows in Awell’s low-code platform and easily integrate them into Healthie. By doing so, Healthie’s customers can automate routine clinical tasks, synchronize data between systems and drive seamless coordination between care team and patients. 

By combining Healthie’s web and mobile platform with our clinical workflows, clinicians will be able to provide the right care, at the right time for the right patient. 

# Extension settings

In order to set up this extension, **you will need to provide a Healthie API key and Api url**. You can obtain an API key via the Healthie portal (`Settings > Developer > API keys`). You can obtain API url in the [DOCUMENTATION](https://docs.gethealthie.com/docs/#environments) in `Environments` section.

# Custom Actions

## Send chat message action

Sends a chat message to a patient in name of the provided provider ID. Will create a new conversation if no active conversation between patient and provider exists or sends a message in an existing conversation if there is an active conversation between the two.

## Create patient

Creates a new patient according to the passed fields. After completion the `healthiePatientId` will be exposed as a data point in the care flow.

## Update patient

Updates a specific patient (defined by the provided `id`) according to the passed fields.

## Apply tag to patient

Adds a tag (existing one, identified by an `id`) to a patient. Although the Healthie API call allows assigning multiple tags per API call, for simplicity of the logic this action can only take one tag as input. Assigning multiple tags is possible by adding multiple actions.

## Remove tag from patient

Removes a tag (identified by an `id`) from a patient.