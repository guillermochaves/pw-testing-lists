import { test, expect } from "@playwright/test";

const TODO_ITEMS: string[] = ["buy some cheese", "feed the cat"];
test("Add new todo", async ({ page }) => {
  await page.goto("/");

  const newTodo = page.getByPlaceholder("What needs to be done?");

  await newTodo.fill(TODO_ITEMS[0]);
  await newTodo.press("Enter");

  await expect(page.locator('.todo-list')).toContainText([
    TODO_ITEMS[0]
  ]);
});

test('Validate page title', async ( { page } ) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "todos" })).toBeVisible();
});

test('Validate google page', async ({page}) => {
  await page.goto('https://www.google.com')

  await expect(page.locator('[title="Search"]')).toBeVisible()

});
