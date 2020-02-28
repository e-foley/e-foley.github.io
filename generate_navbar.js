// Generates HTML code to for a navigation bar offering navigation to pages that aren't the argument.
function generateNavbar(current_page_id, depth) {
  var pages = [
    {'id': 'archives', 'title': 'Archives', 'url': String("../").repeat(depth) + 'archives.html'},
    {'id': 'leaderboards', 'title': 'Leaderboards', 'url': String("../").repeat(depth) + 'leaderboards.html'},
    {'id': 'user_profiles', 'title': 'User Profiles', 'url': String("../").repeat(depth) + 'profile_index.html'},
    {'id': 'random_shot', 'title': 'Random Screenshot', 'url': String("../").repeat(depth) + 'random_shot.html'}
  ];
  var ret = "<table class='navtable master'><tr>\n";
  for (page of pages) {
    ret += "<td class='navtable-cell'>";
    if (current_page_id === page.id) {
      ret += page.title;
    } else {
      ret += "<a href='" + page.url + "' class='green'>" + page.title + "</a>";
    }
    ret += "</td>";
  }
  return ret;
}
